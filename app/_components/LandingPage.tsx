import React from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Brain, Code, Users, Zap, BookOpen, Star } from "lucide-react"

const LandingPage = () => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
            {/* Hero Section */}
            <section className="relative py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center">
                        <Badge className="mb-4 bg-blue-100 text-blue-800 hover:bg-blue-100">
                            🚀 New: Advanced Machine Learning Course Available
                        </Badge>
                        <h1 className="text-4xl sm:text-6xl font-bold text-gray-900 mb-6">
                            Master the Future of
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                                {" "}
                                Artificial Intelligence
                            </span>
                        </h1>
                        <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
                            Join thousands of learners on their AI journey. From beginner-friendly courses to advanced machine
                            learning, we provide hands-on experience with the latest AI technologies.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button size="lg" className="text-lg px-8 py-3">
                                Start Learning Free
                                <ArrowRight className="ml-2 h-5 w-5" />
                            </Button>
                            <Button size="lg" variant="outline" className="text-lg px-8 py-3">
                                Explore Courses
                            </Button>
                        </div>
                        <div className="mt-8 flex items-center justify-center space-x-6 text-sm text-gray-500">
                            <div className="flex items-center">
                                <Star className="h-4 w-4 text-yellow-400 mr-1" />
                                <span>4.9/5 Rating</span>
                            </div>
                            <div className="flex items-center">
                                <Users className="h-4 w-4 mr-1" />
                                <span>50K+ Students</span>
                            </div>
                            <div className="flex items-center">
                                <BookOpen className="h-4 w-4 mr-1" />
                                <span>100+ Courses</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose AI Academy?</h2>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            We provide comprehensive AI education with practical projects, expert instructors, and a supportive
                            community.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                            <CardHeader>
                                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                                    <Code className="h-6 w-6 text-blue-600" />
                                </div>
                                <CardTitle>Hands-on Projects</CardTitle>
                                <CardDescription>
                                    Build real AI applications with guided projects and practical exercises that reinforce your learning.
                                </CardDescription>
                            </CardHeader>
                        </Card>

                        <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                            <CardHeader>
                                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                                    <Brain className="h-6 w-6 text-purple-600" />
                                </div>
                                <CardTitle>Expert Instructors</CardTitle>
                                <CardDescription>
                                    Learn from industry professionals and researchers who are shaping the future of AI technology.
                                </CardDescription>
                            </CardHeader>
                        </Card>

                        <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                            <CardHeader>
                                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                                    <Users className="h-6 w-6 text-green-600" />
                                </div>
                                <CardTitle>Community Support</CardTitle>
                                <CardDescription>
                                    Join a vibrant community of learners, share projects, and get help from peers and mentors.
                                </CardDescription>
                            </CardHeader>
                        </Card>
                    </div>
                </div>
            </section>

            {/* Learning Paths */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">Choose Your Learning Path</h2>
                        <p className="text-lg text-gray-600">
                            Structured learning paths designed for different skill levels and career goals.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        <Card className="relative overflow-hidden">
                            <CardHeader>
                                <Badge className="w-fit mb-2 bg-green-100 text-green-800">Beginner</Badge>
                                <CardTitle>AI Fundamentals</CardTitle>
                                <CardDescription>
                                    Perfect for beginners. Learn the basics of AI, machine learning, and neural networks.
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <ul className="space-y-2 text-sm text-gray-600 mb-6">
                                    <li>• Introduction to AI & ML</li>
                                    <li>• Python for AI</li>
                                    <li>• Basic Neural Networks</li>
                                    <li>• Data Preprocessing</li>
                                </ul>
                                <Button className="w-full">Start Path</Button>
                            </CardContent>
                        </Card>

                        <Card className="relative overflow-hidden border-2 border-blue-200">
                            <div className="absolute top-0 right-0 bg-blue-600 text-white px-3 py-1 text-xs font-medium">
                                Most Popular
                            </div>
                            <CardHeader>
                                <Badge className="w-fit mb-2 bg-blue-100 text-blue-800">Intermediate</Badge>
                                <CardTitle>Machine Learning Engineer</CardTitle>
                                <CardDescription>
                                    Advance your skills with deep learning, computer vision, and NLP projects.
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <ul className="space-y-2 text-sm text-gray-600 mb-6">
                                    <li>• Deep Learning with TensorFlow</li>
                                    <li>• Computer Vision</li>
                                    <li>• Natural Language Processing</li>
                                    <li>• MLOps & Deployment</li>
                                </ul>
                                <Button className="w-full">Start Path</Button>
                            </CardContent>
                        </Card>

                        <Card className="relative overflow-hidden">
                            <CardHeader>
                                <Badge className="w-fit mb-2 bg-purple-100 text-purple-800">Advanced</Badge>
                                <CardTitle>AI Research & Innovation</CardTitle>
                                <CardDescription>Cutting-edge topics for researchers and advanced practitioners in AI.</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <ul className="space-y-2 text-sm text-gray-600 mb-6">
                                    <li>• Transformer Architecture</li>
                                    <li>• Generative AI & LLMs</li>
                                    <li>• Reinforcement Learning</li>
                                    <li>• AI Ethics & Safety</li>
                                </ul>
                                <Button className="w-full">Start Path</Button>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-blue-600">
                <div className="max-w-7xl mx-auto">
                    <div className="grid md:grid-cols-4 gap-8 text-center text-white">
                        <div>
                            <div className="text-4xl font-bold mb-2">50K+</div>
                            <div className="text-blue-100">Active Students</div>
                        </div>
                        <div>
                            <div className="text-4xl font-bold mb-2">100+</div>
                            <div className="text-blue-100">AI Courses</div>
                        </div>
                        <div>
                            <div className="text-4xl font-bold mb-2">95%</div>
                            <div className="text-blue-100">Completion Rate</div>
                        </div>
                        <div>
                            <div className="text-4xl font-bold mb-2">4.9/5</div>
                            <div className="text-blue-100">Student Rating</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to Start Your AI Journey?</h2>
                    <p className="text-lg text-gray-600 mb-8">
                        Join thousands of students who are already building the future with AI. Start with our free courses today.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button size="lg" className="text-lg px-8 py-3">
                            <Zap className="mr-2 h-5 w-5" />
                            Start Free Trial
                        </Button>
                        <Button size="lg" variant="outline" className="text-lg px-8 py-3">
                            View All Courses
                        </Button>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <div className="grid md:grid-cols-4 gap-8">
                        <div>
                            <div className="flex items-center space-x-2 mb-4">
                                <Brain className="h-6 w-6" />
                                <span className="text-lg font-bold">AI Academy</span>
                            </div>
                            <p className="text-gray-400 text-sm">
                                Empowering the next generation of AI innovators through comprehensive education and hands-on experience.
                            </p>
                        </div>
                        <div>
                            <h3 className="font-semibold mb-4">Courses</h3>
                            <ul className="space-y-2 text-sm text-gray-400">
                                <li>Machine Learning</li>
                                <li>Deep Learning</li>
                                <li>Computer Vision</li>
                                <li>Natural Language Processing</li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="font-semibold mb-4">Resources</h3>
                            <ul className="space-y-2 text-sm text-gray-400">
                                <li>Documentation</li>
                                <li>Tutorials</li>
                                <li>Community Forum</li>
                                <li>Blog</li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="font-semibold mb-4">Company</h3>
                            <ul className="space-y-2 text-sm text-gray-400">
                                <li>About Us</li>
                                <li>Careers</li>
                                <li>Contact</li>
                                <li>Privacy Policy</li>
                            </ul>
                        </div>
                    </div>
                    <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
                        <p>&copy; 2024 AI Academy. All rights reserved.</p>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default LandingPage