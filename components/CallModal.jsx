import Image from "next/image";
import React, { useState } from "react";
import { RxCross1 } from 'react-icons/rx'
import { IoIosCall } from "react-icons/io"
import { FaVideo } from "react-icons/fa"
import { MdCallEnd } from "react-icons/md"
import { MdKeyboardVoice } from "react-icons/md"
import Draggable, { DraggableCore } from 'react-draggable';

export default function CallModal() {
    const initialText = 'Ready to call?';
    const [callText, setCallText] = useState(initialText);
    const [style, setStyle] = useState("modal-style");
    const [fullScreen, setFullScreen] = useState(false);

    const handleFullScreen = () => {
        // toggle shown state
        setFullScreen(current => !current);
    };

    function handleCallText() {
        setCallText('Ringing...');
        setTimeout(() => {
            setCallText(initialText);
        }, 3000);
    }

    const changeStyle = () => {
        console.log("you just clicked");

        setStyle("modal-fullstyle");
    };
    return (
        <Draggable>
            <div className={`container mx-auto bg-white my-12 ${style}`}>
                <div className="flex flex-col justify-center items-center rounded-lg border-2 border-gray-100 bg-[#4364751A] shadow-xl">
                    <div class={`relative ${style}`}>
                        <button onClick={changeStyle}>
                            <Image src={'/FullScreen.png'} width={100} height={100} className='absolute left-0 top-0 h-8 w-8' alt='user' />
                        </button>
                    </div>
                    <div className={`flex flex-col px-4 py-4 justify-center items-center ${style}`}>
                        <Image src={'/Mary.png'} width={100} height={100} className='my-2' alt='user' />
                        <h3 className="text-2xl font-semibold text-[#436475]">Mary Jane</h3>
                        <p className="font-medium text-sm text-[#436475]">{callText}</p>
                    </div>
                    <div className={`flex flex-row px-4 py-4 justify-center items-center bg-white gap-3 ${style}`}>
                        <IoIosCall className="text-4xl font-semibold p-2 text-white bg-green-500 rounded-full cursor-pointer" onClick={handleCallText} />
                        <RxCross1 className="modal-close text-4xl font-semibold p-2 text-white bg-slate-700 rounded-full cursor-pointer" />
                        <FaVideo className="text-4xl font-semibold p-2 text-white bg-green-500 rounded-full cursor-pointer" onClick={handleCallText} />
                    </div>
                </div>
            </div>
        </Draggable>
    )
}