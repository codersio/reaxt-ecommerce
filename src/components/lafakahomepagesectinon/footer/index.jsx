import React from 'react'
import { AiFillClockCircle,AiTwotonePhone,AiOutlineMail} from "react-icons/ai";
import { MdLocationOn } from "react-icons/md";
import { FaCcVisa,FaCcMastercard,FaCcPaypal,FaFacebookF } from "react-icons/fa";
import {SiAmericanexpress} from "react-icons/si";
import {AiOutlineCreditCard,AiOutlineTwitter,AiFillYoutube,AiFillInstagram} from "react-icons/ai";
export default function Footer(){
    return <div className='font-lafaka-theme-font'>
        <div className='footer-container   bg-[#2a2a2a] py-[4rem]'>
        <div className="row grid grid-cols-4 gap-7 px-[5rem]">
            <div className="iitem space-y-7">
               <div className="heading space-y-2">
                <h3 className='text-white text-[21px] '> Information</h3>
                <hr className='border border-[#f2002d] w-[2.5rem]'/>
               </div>
               <div className="menu">
                <ul className='text-[14px] text-[#f5f5f5] space-y-2'>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Our Menu</li>
                    <li>Blog</li>
                    <li>Contacts</li>
                </ul>
               </div>
            </div>
            <div className="iitem space-y-7">
               <div className="heading space-y-2">
                <h3 className='text-white text-[21px] '> Extras</h3>
                <hr className='border border-[#f2002d] w-[2.5rem]'/>
               </div>
               <div className="menu">
                <ul className='text-[14px] text-[#f5f5f5] space-y-2'>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Our Menu</li>
                    <li>Blog</li>
                    <li>Contacts</li>
                </ul>
               </div>
            </div>
            <div className="iitem space-y-7">
               <div className="heading space-y-2">
                <h3 className='text-white text-[21px] '> Get In Touch</h3>
                <hr className='border border-[#f2002d] w-[2.5rem]'/>
               </div>
               <div className="menu">
                <ul className='text-[14px] text-[#f5f5f5] space-y-2'>
                    <li className='flex space-x-3'> <div className="icon grid place-items-center">
                        <AiFillClockCircle/></div>  <h3>Mon. - Sun.: 10:00 - 23:00</h3>
                        </li>
                    <li className='flex space-x-3'> <div className="icon grid place-items-center">
                        <MdLocationOn/></div>  <h3>164 7th Avenue, Seattle, WA 9801</h3>
                        </li>
                    <li className='flex space-x-3'> <div className="icon grid place-items-center">
                        <AiTwotonePhone/></div>  <h3>+1.888.292.7171</h3>
                        </li>
                    <li className='flex space-x-3'> <div className="icon grid place-items-center">
                        <AiOutlineMail/></div>  <h3>orders@pizza.con</h3>
                        </li>
                   
                </ul>
               </div>
            </div>
            <div className="iitem space-y-7">
               <div className="heading  space-y-2">
                <h3 className='text-white text-[21px] '> We Accept</h3>
                <hr className='border border-[#f2002d] w-[2.5rem]'/>
               </div>
               <div className="menu">
                <ul className='text-[14px] text-[#f5f5f5] space-y-2'>
                    <div className='flex space-x-1 text-[3rem]'>
                        <FaCcVisa/> 
                        <FaCcMastercard/>
                        <SiAmericanexpress/>
                        <FaCcPaypal/>
                        <AiOutlineCreditCard/>
                    </div>
                </ul>
               </div>
            </div>
        </div>
    </div>
    <div className="footer-bottom flex justify-between bg-[#222] text-white p-6 px-[4rem]">
<div className="item flex space-x-3 ">
    <FaFacebookF/>
    <AiOutlineTwitter/>
    <AiFillYoutube/>
    <AiFillInstagram/>
</div>
<div className="item grid place-items-start">
    <h3 className='text-[11px] text-[#aeaeae]'>Lafka theme by theAlThemist | © 2022 All rights reserved!</h3>
</div>
    </div>
    </div>
}