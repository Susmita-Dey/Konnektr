import React from "react";
import MessageComponent from "./MessageComponent";
import MessageInputComponent from "./MessageInputComponent";
import MessageNav from "./MessageNav";

export default function MessageArea() {
    return (
        <div className="container mx-auto text-[#436475] rounded-lg max-w-full h-screen">
            <div className="flex flex-col justify-between items-center gap-4">
                <MessageNav />
                <MessageComponent />
                <MessageInputComponent />
            </div>
        </div>
    )
}