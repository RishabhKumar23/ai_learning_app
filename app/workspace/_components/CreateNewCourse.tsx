import React, { useState } from 'react'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Switch } from '@/components/ui/switch';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { Button } from '@/components/ui/button';
import { LoaderPinwheelIcon, Sparkle } from 'lucide-react';
import axios from 'axios';
import { is } from 'drizzle-orm';
import { v4 as uuidv4 } from "uuid";

interface CreateNewCourseProps {
    children: React.ReactNode;
}

const CreateNewCourse = ({ children }: CreateNewCourseProps) => {

    type FormData = {
        courseName?: string;
        courseDescription?: string;
        totalChapter?: string;
        videoLecture?: boolean;
        difficulty?: string;
        category?: string;
    };

    const [formData, setformData] = useState<FormData>({});
    const [isLoading, setIsLoading] = useState<boolean>(false);


    const HandleInputChange = (field: keyof FormData, value: string | boolean) => {
        setformData((prevData) => ({
            ...prevData,
            [field]: value,
        }));
        //ANCHOR - Console is here
        console.log(`Field: ${field}, Value: ${value}`);
    }

    const onGenerate = async () => {
        //ANCHOR - Console is here
        console.log("Form Data:", formData);

        const courseId = uuidv4(); // Generate a unique course ID

        try {
            setIsLoading(true);
            const result = await axios.post('/api/generate-course-layout', {
                ...formData,
                courseId: courseId
            })
            setIsLoading(false);
            //ANCHOR - Console is here
            console.log("Generated Course Data:", result.data);

        } catch (error) {
            setIsLoading(false);
            console.error("Error generating course layout:", error);
        }
    }

    return (
        <Dialog>
            <DialogTrigger asChild>{children}</DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Create New Course</DialogTitle>
                    <DialogDescription asChild>
                        <div className='flex flex-col gap-4'>
                            <div className='flex flex-col gap-1'>
                                <label>Course Name</label>
                                <Input placeholder="Course Name" onChange={(e) => HandleInputChange("courseName", e?.target.value)} />
                            </div>
                            <div>
                                <label>Course Description (Optional)</label>
                                <Textarea placeholder="Course Description"
                                    onChange={(e) => HandleInputChange("courseDescription", e.target.value)} />
                            </div>
                            <div className='flex flex-col gap-1'>
                                <label>Total Chapter</label>
                                <Input placeholder="Number Of Chapter" type='number' onChange={(e) => HandleInputChange("totalChapter", e.target.value)} />
                            </div>
                            <div className='flex flex-row gap-1 align-items-center'>
                                <label>Video Lecture</label>
                                <Switch
                                    onCheckedChange={() => HandleInputChange("videoLecture", !formData?.videoLecture)}
                                />
                            </div>
                            <div className='flex flex-col gap-1'>
                                <label>Difficulty</label>
                                <Select onValueChange={(value) => HandleInputChange("difficulty", value)}>
                                    <SelectTrigger className="w-[180px]">
                                        <SelectValue placeholder="Difficulty Level" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="beginner">Beginner</SelectItem>
                                        <SelectItem value="intermediate">Intermediate</SelectItem>
                                        <SelectItem value="advanced">Advanced</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                            <div className='flex flex-col gap-1'>
                                <label>Category</label>
                                <Input placeholder="Category (Sperated by comma)"
                                    onChange={(e) => HandleInputChange("category", e.target.value)} />
                            </div>
                            <div className='flex flex-col gap-1'>
                                <Button className='cursor-pointer mt-4' onClick={onGenerate} disabled={isLoading}>
                                    {isLoading ? <LoaderPinwheelIcon className='animate-spin' /> : <Sparkle />}
                                    Generate
                                </Button>
                            </div>
                        </div>
                    </DialogDescription>
                </DialogHeader>
            </DialogContent>
        </Dialog>
    )
}

export default CreateNewCourse;