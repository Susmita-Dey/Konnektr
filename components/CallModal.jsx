import Image from "next/image";
import React from "react";
import { RxCross1 } from 'react-icons/rx'
import { IoIosCall } from "react-icons/io"
import { FaVideo } from "react-icons/fa"

export default function CallModal() {
    if (typeof window !== "undefined") {
        var openmodal = document.querySelectorAll('.modal-open')
        for (var i = 0; i < openmodal.length; i++) {
            openmodal[i].addEventListener('click', function (event) {
                event.preventDefault()
                toggleModal()
            })
        }

        // const overlay = document.querySelector('.modal-overlay')
        // overlay.addEventListener('click', toggleModal)

        var closemodal = document.querySelectorAll('.modal-close')
        for (var i = 0; i < closemodal.length; i++) {
            closemodal[i].addEventListener('click', toggleModal)
        }

        document.onkeydown = function (evt) {
            evt = evt || window.event
            var isEscape = false
            if ("key" in evt) {
                isEscape = (evt.key === "Escape" || evt.key === "Esc")
            } else {
                isEscape = (evt.keyCode === 27)
            }
            if (isEscape && document.body.classList.contains('modal-active')) {
                toggleModal()
            }
        };


        function toggleModal() {
            const body = document.querySelector('body')
            const modal = document.querySelector('.modal')
            modal.classList.toggle('opacity-0')
            modal.classList.toggle('pointer-events-none')
            body.classList.toggle('modal-active')
        }
    }
    return (
        <div className="container mx-auto bg-white w-96">
            <div className="flex flex-col justify-center items-center rounded-lg border-2 border-gray-100">
                <div class="modal-open relative h-full w-96">
                    <Image src={'/FullScreen.png'} width={100} height={100} className='absolute left-0 top-0 h-8 w-8' alt='user' />
                </div>
                <div className="modal-content flex flex-col px-4 py-4 bg-[#4364751A] justify-center items-center h-full w-96">
                    <Image src={'/Mary.png'} width={100} height={100} className='my-2' alt='user' />
                    <h3 className="text-2xl font-semibold text-[#436475]">Mary Jane</h3>
                    <p className="font-medium text-sm text-[#436475]">Ready to call?</p>
                </div>
                <div className="flex flex-row px-4 py-4 justify-center items-center h-full w-96 gap-3">
                    <IoIosCall className="text-4xl font-semibold p-2 text-white bg-green-500 rounded-full cursor-pointer" />
                    <RxCross1 className="modal-close text-4xl font-semibold p-2 text-white bg-slate-700 rounded-full cursor-pointer" />
                    <FaVideo className="text-4xl font-semibold p-2 text-white bg-green-500 rounded-full cursor-pointer" />
                </div>
            </div>
        </div>
    )
}