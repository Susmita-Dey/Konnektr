import Image from "next/image";
import React, { useState } from "react";
import { BsSendFill } from "react-icons/bs"

export default function MessageComponent() {
    const [message, setMessage] = useState('');

    const [updated, setUpdated] = useState('');

    const handleChange = (event) => {
        setMessage(event.target.value);
    };

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            // 👇 Get input value
            setUpdated(message);
        }
    };
    return (
        <div className="container mx-auto text-[#436475] rounded-lg bg-hero-bg bg-cover bg-center w-full h-64">
            <div className="flex flex-col flex-wrap justify-center items-center gap-4">
                <p className="text-base">Jan 14, 2023</p>
                <div className="flex flex-col text-lg relative">
                    <span className="px-4 py-2 gradient absolute right-0 w-60">
                        Hey! How are you ?
                    </span>
                    <span className="px-4 py-2 absolute left-0 w-80 my-12 bg-slate-200">I&apos;m great and what about you?</span>
                </div>
                <div className="flex flex-col text-lg relative mt-12">
                    <span className="px-4 py-2 absolute left-0 w-80 my-12 bg-slate-200">{message}</span>
                    <span className="px-4 py-2 absolute left-0 w-80 my-12 bg-slate-200">{updated}</span>
                </div>
            </div>
            <div className="flex flex-row justify-center px-4 py-6 mt-32 rounded-xl shadow-lg gap-2">
                <Image src={'/Vector.svg'} width={0} height={0} className='w-6' alt='pin' />
                <input type="text" name="message" id="message" placeholder="Message" className="outline-none px-2 min-w-screen cursor-text" value={message}
                    onChange={handleChange}
                    onKeyDown={handleKeyDown} />
                <button type="submit">
                    <BsSendFill className="text-2xl" />
                </button>
            </div>
        </div>
    )
}