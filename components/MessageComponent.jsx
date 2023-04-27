import React from "react";

export default function MessageComponent() {
    return (
        <div className="container mx-auto text-[#436475] rounded-lg bg-hero-bg bg-cover bg-center w-full h-64">
            <div className="flex flex-col justify-center items-center gap-4">
                <p className="text-base">Jan 14, 2023</p>
                <div className="flex flex-col text-lg relative">
                    <span className="px-4 py-2 gradient absolute right-0 w-60">
                        Hey! How are you ?
                    </span>
                    <span className="px-4 py-2 absolute left-0 w-80 mt-12 bg-slate-200">I&apos;m great and what about you?</span>
                </div>
            </div>
        </div>
    )
}