'use client'
import React from 'react'
import Image from 'next/image'
import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarGroupContent,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from "@/components/ui/sidebar"
import { Button } from '@/components/ui/button'
import { BookOpen, CompassIcon, LayoutDashboardIcon, PenIcon, UserCircle2Icon, WalletCardsIcon } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import CreateNewCourse from './CreateNewCourse'

const SidebarOptions = [
    {
        name: 'Dashboard',
        icon: LayoutDashboardIcon,
        path: '/workspace/dashboard'
    },
    {
        name: 'My Learning',
        icon: BookOpen,
        path: '/workspace/my-learning'
    },
    {
        name: 'Explore',
        icon: CompassIcon,
        path: '/workspace/explore'
    },
    {
        name: 'AI Tools',
        icon: PenIcon,
        path: '/workspace/aitools'
    },
    {
        name: 'Billing',
        icon: WalletCardsIcon,
        path: '/workspace/aitools'
    },
    {
        name: 'Profile',
        icon: UserCircle2Icon,
        path: '/workspace/profile'
    },
]

const AppSidebar = () => {
    const path = usePathname();

    return (
        <Sidebar>
            <SidebarHeader className={'p-4'}>
                <Image src="/logo.svg" alt="Logo" width={60} height={60} />
            </SidebarHeader>
            <SidebarContent>
                <SidebarGroup className='' />
                {/* <div className='flex items-center justify-center h-20'> */}
                <CreateNewCourse>
                    <Button className='mt-5  bg-blue-500 hover:bg-blue-300 cursor-pointer hover:text-black hover:border-black'>Create New Course</Button>
                </CreateNewCourse>
                {/* </div> */}
                <SidebarGroup />
                <SidebarGroup>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            {SidebarOptions.map((items, index) => (
                                <SidebarMenuItem key={index}>
                                    <SidebarMenuButton asChild className='p-5 hover:bg-blue-300'>
                                        <Link href={items.path} className={`text-xl font-semibold
                                            ${path.includes(items.path) ? 'bg-blue-300 text-black border-black' : 'text-gray-500 hover:bg-blue-300 hover:text-black hover:border-blue-500'} 
                                            flex items-center gap-2 rounded-md transition-all duration-200 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-black
                                            `}>
                                            <items.icon className="h-20 w-20" />
                                            <span className=''>{items.name}</span>
                                        </Link>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                            ))}
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent>
            <SidebarFooter />
        </Sidebar >
    )
}

export default AppSidebar