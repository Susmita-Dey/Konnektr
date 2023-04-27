import Link from 'next/link'
import React from 'react'
import { AiFillHome, AiTwotoneSetting } from 'react-icons/ai'
import { BsPersonCircle } from 'react-icons/bs'
import { HiFire, HiBell, HiBookmark } from 'react-icons/hi'
import Image from 'next/image'

export default function SideNavbar() {
    return (
        <div className="h-screen flex flex-row text-[#436475] font-medium">
            <div className="flex flex-col justify-between items-center w-64 bg-white rounded-r-3xl overflow-hidden">
                <div className="flex items-center justify-center h-20">
                    <Link href='/' className="text-2xl font-semibold uppercase">Konnektr</Link>
                </div>
                <ul className="flex flex-col py-4 justify-center px-10 align-middle">
                    <li>
                        <Link href="/" className="flex flex-row gap-2 items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800">
                            <AiFillHome className='text-2xl' />
                            <span className="text-base font-medium">Home</span>
                        </Link>
                    </li>
                    <li>
                        <Link href="#" className="flex flex-row gap-2 items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800">
                            <HiFire className="text-2xl" />
                            <span className="text-base font-medium">Konnektions</span>
                        </Link>
                    </li>
                    <li>
                        <Link href="#" className="flex flex-row gap-2 items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800">
                            <HiBell className='text-2xl' />
                            <span className="text-base font-medium">Communities</span>
                        </Link>
                    </li>
                    <li>
                        <Link href="#" className="flex flex-row gap-2 items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800">
                            <HiBookmark className='text-2xl' />
                            <span className="text-base font-medium">Quests</span>
                        </Link>
                    </li>
                    <li>
                        <Link href="#" className="flex flex-row gap-2 items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800">
                            <BsPersonCircle className='text-2xl' />
                            <span className="text-base font-medium">Store</span>
                        </Link>
                    </li>
                    <li>
                        <Link href="#" className="flex flex-row gap-2 items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 ">
                            <Image src='/message.svg' width={0} height={0} className="-ml-1 w-1/4 h-1/2" alt='message-icon' />
                            <span className="text-base font-medium text-gradient">Messages</span>
                        </Link>
                    </li>
                </ul>
                <div className="flex flex-row gap-2 items-center justify-center h-24 bottom-0 rounded-lg shadow-sm">
                    <Image src='/user.png' width={100} height={100} className='w-1/4 h-1/2' alt='user' />
                    <span className='flex flex-col pr-2'>
                        <span className="text-base cursor-pointer">User</span>
                        <span className='text-sm text-gradient'>@shivrxj.lens</span>
                    </span>
                    <HiBell className='text-xl cursor-pointer' />
                    <AiTwotoneSetting className='text-xl cursor-pointer' />
                </div>
            </div>
        </div>
    )
}