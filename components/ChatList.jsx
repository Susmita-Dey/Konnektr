import React from "react";
import ChatCard from "./ChatCard";

export default function ChatList() {
    return (
        <div className="container mx-auto text-primary-text rounded-lg">
            <div className="flex flex-col justify-center items-center">
                <h3 className="flex font-semibold text-xl justify-start items-start py-4">Chats</h3>
                <div className="flex flex-col justify-center items-center gap-2 cursor-pointer">
                    <ChatCard imageSrc="/Online%20User.png" user='Shivrajjj' messageText='Hey there.....' lastChatTime='2 minutes' />
                    <ChatCard imageSrc="/user.png" user='Shivrajjj' messageText='Hey there.....' lastChatTime='2 minutes' />
                    <ChatCard imageSrc="/user.png" user='Shivrajjj' messageText='Hey there.....' lastChatTime='2 minutes' />
                    <ChatCard imageSrc="/Online%20User.png" user='Shivrajjj' messageText='Hey there.....' lastChatTime='2 minutes' />
                    <ChatCard imageSrc="/user.png" user='Shivrajjj' messageText='Hey there.....' lastChatTime='2 minutes' />
                    <ChatCard imageSrc="/Online%20User.png" user='Shivrajjj' messageText='Hey there.....' lastChatTime='2 minutes' />
                </div>
            </div>
        </div>
    )
}