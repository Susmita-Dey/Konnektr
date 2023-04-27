import Image from "next/image";
import React, { useState } from "react";
import { FiPhoneCall } from "react-icons/fi"
import { FaVideo } from "react-icons/fa"
import CallModal from "./CallModal";

export default function MessageNav() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <div className="container mx-auto text-[#436475]">
            <div className="flex flex-row justify-between px-4 py-6 rounded-xl shadow-lg">
                <div className="flex gap-2 justify-center items-center">
                    <Image src={'/user.png'} width={100} height={100} className='w-1/3' alt='user' />
                    <h3 className="text-xl font-semibold">Shivrajjj</h3>
                </div>
                <div className="flex gap-6 justify-center items-center">
                    <FiPhoneCall className="text-2xl cursor-pointer" onClick={handleShow} />
                    <FaVideo className="text-2xl" />
                </div>
            </div>
            <CallModal show={show} onHide={handleClose}></CallModal>
        </div>
    )
}