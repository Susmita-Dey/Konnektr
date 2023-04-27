import Image from "next/image";
import React, { useState } from "react";
import { BsSendFill } from "react-icons/bs"
import { v4 as uuidv4 } from "uuid";

const initialList = [
    {
        id: 1,
        name: "I'm great and what about you?"
    }
];

export default function MessageComponent() {
    const [list, setList] = useState(initialList);
    const [name, setname] = useState("");

    const handleChange = (event) => {
        setname(event.target.value);
    };

    const handleKeyDown = (event) => {
        if (event.key === "Enter") {
            // const newList = list.concat({ name, id: uuidv4() });
            // setList(newList);
            // setname("");
            handleAdd();
        }
    };

    const handleAdd = () => {
        const newList = list.concat({ name, id: uuidv4() });
        setList(newList);
        setname("");
    };
    return (
        <div className="container mx-auto text-[#436475] rounded-lg bg-hero-bg bg-cover bg-center w-full">
            <div className="flex flex-col flex-wrap justify-center items-center gap-4 h-[27rem]">
                <p className="text-base">Jan 14, 2023</p>
                <div className="flex flex-col text-lg relative">
                    <span className="px-4 py-2 gradient absolute right-0 w-60">
                        Hey! How are you?
                    </span>
                </div>
                <div className="flex flex-col text-lg relative my-12">
                    <form className="flex flex-col gap-3 list-none absolute left-0 w-80">
                        {list.map((item) => {
                            return (
                                <list key={item.id} className='bg-slate-200 px-4 py-2'>{item.name}</list>
                            );
                        })}
                    </form>
                </div>
            </div>
            <AddItem
                name={name}
                onChange={handleChange}
                onAdd={handleAdd}
                handleKeyDown={handleKeyDown}
            />
        </div>
    )
}

const AddItem = ({ onChange, name, onAdd, handleKeyDown }) => {
    return (
        <div className="flex flex-row justify-center px-4 py-6 mt-32 rounded-xl shadow-lg gap-2">
            <Image src={'/Vector.svg'} width={0} height={0} className='w-6' alt='pin' />
            <input id="message" placeholder="Message" className="outline-none px-2 min-w-[40rem] cursor-text"
                type="text"
                value={name}
                onChange={onChange}
                onKeyDown={handleKeyDown}
            />
            <button type="button" onClick={onAdd}>
                <BsSendFill className="text-2xl" />
            </button>
        </div>
    );
};