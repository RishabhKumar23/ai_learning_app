import React from 'react'
import CourseList from './CourseList'


const WelcomeBanner = () => {
    return (
        <div className="min-h-screen bg-gray-50">
            {/* Header Section */}
            <div className="bg-blue-600 text-white rounded-2xl">
                <div className="max-w-6xl mx-auto px-6 py-12 ">
                    <div className="rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 p-8">
                        <h1 className="text-4xl font-bold mb-3">Welcome to Online Learning Platform</h1>
                        <p className="text-xl text-white/90 font-medium">Learn, Create and Explore Your favorite courses</p>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <CourseList />
        </div>
    )
}

export default WelcomeBanner