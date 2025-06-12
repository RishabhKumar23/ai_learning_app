import { GoogleGenAI } from "@google/genai";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const formData = await request.json();

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

  // To run this code you need to install the following dependencies:
  // npm install @google/genai mime
  // npm install -D @types/node

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
  if (response?.text) {
    console.log(response.text);
  } else {
    console.log("No text in response");
  }

  //TODO - Save the response to the database

  return NextResponse.json(response.text ? JSON.parse(response.text) : { error: "No response text" });
}
