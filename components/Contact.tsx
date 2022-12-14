import React from 'react';
import { motion } from 'framer-motion';
import {EnvelopeIcon, MapPinIcon, PhoneIcon} from '@heroicons/react/20/solid';


export default function Contact() {
    return (
        <div className="h-screen flex relative flex-col text-center md:text-left md>flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">
            <h3
                className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl"
            >
                Contact
            </h3>
            <div className="flex flex-col space-y-10">
                <h4 className="text-4xl font-semibold text-center">
                    I have got just what you need . {" "}
                    <span className="decoration-[#F7AB0A]/50 underline" >Lets talk.</span>
                </h4>
                <div className="space-y-10">
                    <div className="flex items-center space-x-5 justify-center">
                        <PhoneIcon className="text-[#F7AB0A] h7 w-7 animate-pulse"/>
                        <p className="text-2xl">+55336655554548</p>
                    </div>

                    <div className="flex items-center space-x-5 justify-center">
                        <EnvelopeIcon className="text-[#F7AB0A] h7 w-7 animate-pulse"/>
                        <p className="text-2xl">papareact.team@gmail.com</p>
                    </div>

                    <div className="flex items-center space-x-5 justify-center">
                        <MapPinIcon className="text-[#F7AB0A] h7 w-7 animate-pulse"/>
                        <p className="text-2xl">123 developer Lane</p>
                    </div>
                </div>
                <form className="flex flex-col space-y-2 w-fit mx-auto">
                    <div className="flex space-x-2">
                        <input placeholder="Name" className="contactInput" type="text" />
                        <input placeholder="Email" className="contactInput" type="email" />
                    </div>
                    <input placeholder="Subject" className="contactInput" type="text" />
                    <textarea placeholder="Message" className="contactInput"></textarea>
                    <button type="submit" className="bg-[#F7AB0A] py-5 px-10 rounded-md text-black font-bold text-lg">Submit</button>
                </form>
            </div>

        </div>
    )
}