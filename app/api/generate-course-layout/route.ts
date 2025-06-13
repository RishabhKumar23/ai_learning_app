import db from "@/config/db";
import { coursesTable } from "@/config/schema";
import { currentUser } from "@clerk/nextjs/server";
import { GoogleGenAI } from "@google/genai";
import { NextResponse } from "next/server";
import { v4 as uuidv4 } from "uuid";

const PROMPT = `Generate Learning Course depends on the following details.
Make sure to add:

Course Name

Description

Course Banner Image Prompt (Create a modern, flat-style 2D digital illustration representing user Topic. Include UI/UX elements such as mockup screens, text blocks, icons, buttons, and creative workspace tools. Add symbolic elements related to user Course, like sticky notes, design components, and visual aids. Use a vibrant color palette (blues, purples, oranges) with a clean, professional look. The illustration should feel creative, tech-savvy, and educational, ideal for visualizing concepts in user Course)

For Course Banner in 3D format

Chapter Name

Topic under each chapter

Duration for each chapter

Output Format: JSON only
Schema:

json
Copy
Edit
{
"course": {
  "name": "string",
  "description": "string",
  "category": "string",
  "level": "string",
  "includeVideo": "boolean",
  "noOfChapters": "number",
  "bannerImagePrompt": "string",
  "chapters": [
    {
      "chapterName": "string",
      "duration": "string",
      "topics": [
        "string"
      ]
    }
  ]
}
}`;

export async function POST(request: Request) {
  const { courseId, ...formData } = await request.json();
  const user = await currentUser();

  const ai = new GoogleGenAI({
    apiKey: process.env.GEMINI_API_KEY,
  });
  const config = {
    responseMimeType: "text/plain",
  };
  const model = "gemini-2.0-flash";
  const contents = [
    {
      role: "user",
      parts: [
        {
          text: PROMPT + JSON.stringify(formData),
        },
      ],
    },
  ];

  const response = await ai.models.generateContent({
    model,
    config,
    contents,
  });

  // Extract and clean the JSON from the response text
  let responseText = response.text ?? "";
  responseText = responseText
    .replace(/```json/i, "")
    .replace(/```/g, "")
    .trim();

  let jsonResponse: any = {};
  try {
    jsonResponse = JSON.parse(responseText);
    console.log("AI Response JSON:", jsonResponse);
  } catch (e) {
    console.error("Failed to parse AI response as JSON:", e, responseText);
    return NextResponse.json(
      { error: "Invalid AI response format", details: responseText },
      { status: 500 }
    );
  }

  // TODO - Save the response to the database
  const result = await db.insert(coursesTable).values({
    //     ...formData,
    // courseJson: jsonResponse,
    //     userEmail: user?.primaryEmailAddress?.emailAddress,
    //     courseId: courseId,
    courseId: courseId,
    course_name: formData.courseName,
    description: formData.courseDescription,
    noOfChapters: parseInt(formData.totalChapter),
    includeVideo: formData.videoLecture ?? false,
    difficulty: formData.difficulty,
    category: formData.category,
    courseJson: jsonResponse,
    userEmail: user?.primaryEmailAddress?.emailAddress,
  });

  return NextResponse.json({ courseId: courseId, jsonResponse });
}
