import React from "react";
import MessageNav from "./MessageNav";

export default function MessageArea() {
    return (
        <div className="container mx-auto text-primary-text rounded-lg border-2 border-gray-500">
            <div className="flex flex-col justify-center items-center">
                <MessageNav />
                <MessageNav />
                <MessageNav />
            </div>
        </div>
    )
}