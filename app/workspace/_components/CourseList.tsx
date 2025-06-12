'use client'
import React, { useState } from 'react'
import { Button } from "@/components/ui/button"
import { GraduationCap, Play, Plus } from "lucide-react"
import CreateNewCourse from './CreateNewCourse'

const CourseList = () => {
    const [courses, setCourses] = useState([]);

    return (
        <div>
            <div className="max-w-6xl mx-auto px-6 py-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-8">Course List</h2>

                {/* Empty State */}
                <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-12">
                    <div className="text-center max-w-md mx-auto">
                        {courses?.length == 0 ? (
                            <div>
                                {/* Icon */}
                                <div className="relative mb-8">
                                    <div className="w-20 h-20 bg-blue-600 rounded-2xl flex items-center justify-center mx-auto shadow-lg">
                                        <div className="relative">
                                            <GraduationCap className="w-10 h-10 text-white" />
                                            <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                                                <Play className="w-3 h-3 text-white fill-white" />
                                            </div>
                                        </div>
                                    </div>
                                    <h3 className="text-2xl font-semibold text-gray-900 mb-6">Look like you haven&#39;t created any courses yet</h3>
                                </div>
                            </div>
                        ) : (
                            <div>
                                <p className="text-gray-500">No courses found.</p>
                                {/* Text */}
                            </div>
                        )}

                        {/* CTA Button */}
                        <CreateNewCourse>
                            <Button
                                // onClick={handleCreateCourse}
                                className="cursor-pointer bg-blue-500 hover:bg-blue-300 border-black text-white hover:text-xl hover:text-black font-semibold px-8 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-105"
                                size="lg"
                            >
                                <Plus className="w-5 h-5 mr-2" />
                                Create your first course
                            </Button>
                        </CreateNewCourse>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CourseList