import { StaticImage } from 'gatsby-plugin-image'
import React from 'react'
 export default function Bodysection5(){
    return <div className='bg-[#ffca3c] relaive font-lafaka-theme-font grid place-items-center'>
       <div className='text-center w-[42rem] py-[4rem] space-y-8'>
    <div>
             <h3 className='text-[30px] font-[600] text-[#22272d]'>Love Burgers? Like Deals?</h3>
        <p className='text-[#95601c] text-[15px]'>Be the first to know about our newest menu items and latest offers.</p>
    </div>
        <div className="input-container pl-[1.5rem] p-[4px]   overflow-hidden flex justify-between bg-white border rounded-3xl">
<input type="text" placeholder='Email' />
<button className='uppercase bg-[#f2002d] text-[15px]  font-[600] p-3 rounded-full text-white text-center'>subscribe</button>
        </div>
       </div>

       <div className="absolute -mt-[16rem] rounded-full left-[50%] w-[5rem] h-[5rem] grid place-items-center bg-[#ffca3c]">
        <StaticImage class='w-[3rem]' src='../../../images/serving-dish.png'/>
       </div>
    </div>
 }