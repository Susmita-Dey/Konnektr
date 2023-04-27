import Image from "next/image";
import React from "react";

export default function ChatCard({ imageSrc = '/Online%20User.png', user = 'Shivrajjj', messageText = 'Hey there.....', lastChatTime = '2 minutes' }) {
    return (
        <div className="container mx-auto text-primary-text">
            <div className="flex flex-row justify-center items-center rounded-lg border-2 border-gray-100 px-4 py-4 gap-2">
                <Image src={imageSrc} width={100} height={100} className='w-1/4 h-1/2' alt='user' />
                <div className="flex justify-between w-full gap-4">
                    <div className="flex flex-col gap-1">
                        <p className="text-lg font-medium">{user}</p>
                        <p className="text-base">{messageText}</p>
                    </div>
                    <p className="flex text-sm font-medium justify-center items-center">{lastChatTime}</p>
                </div>
            </div>
        </div>
    )
}