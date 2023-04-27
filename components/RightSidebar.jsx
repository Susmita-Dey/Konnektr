import React from "react";
import { FiSearch } from 'react-icons/fi'
import ChatList from "./ChatList";

export default function RightSidebar() {
    return (
        <div className="w-1/3 overflow-hidden mx-auto text-[#436475] bg-[#2AA3EF0A] h-full">
            <div className="flex flex-col justify-around gap-4 items-center">
                <div className="flex flex-row justify-center items-center rounded-lg border-2 border-black p-2 gap-2">
                    <FiSearch className="text-2xl" />
                    <input type="search" name="search" id="search" placeholder="Search" className="outline-none cursor-text" />
                </div>
                <ChatList />
            </div>
        </div>
    )
}