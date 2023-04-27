import Image from "next/image";
import React from "react";
import { BsSendFill } from "react-icons/bs"

export default function MessageInputComponent() {
    return (
        <div className="container mx-auto text-[#436475]">
            <div className="flex flex-row justify-center px-4 py-6 rounded-xl shadow-lg gap-2">
                <Image src={'/Vector.svg'} width={0} height={0} className='w-6' alt='pin' />
                <input type="text" name="message" id="message" placeholder="Message" className="outline-none px-2 min-w-screen cursor-text" />
                <button type="submit">
                    <BsSendFill className="text-2xl" />
                </button>
            </div>
        </div>
    )
}