import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';

import { RiCustomerService2Line } from "react-icons/ri";
export default function Bodysection4(){
    return <div className='bg-[#fdfaed] font-lafaka-theme-font py-[4rem] '><div className='section-container grid grid-cols-4 place-items-center px-[5rem]'>
<div className="item text-center  space-y-3">
   <div className='grid place-items-center'>
     <StaticImage class="w-[5rem]" src='../../../images/waiter.png' />
   </div>
    <h3 className='text-[#22272d] font-[600] text-[19ox]'>Friendly Service</h3>
    <p className='text-[16px] text-[#888] '>Filet mignon buffalo shankle leberkas, porchetta frankfurter.</p>
</div>

<div className="item text-center  space-y-3">
   <div className='grid place-items-center'>
    <StaticImage class="w-[5rem]" src='../../../images/menu.png' />
   </div>
    <h3 className='text-[#22272d] font-[600] text-[19ox]'>Original Recipes</h3>
    <p className='text-[16px] text-[#888] '>Filet mignon buffalo shankle leberkas, porchetta frankfurter.</p>
</div>
<div className="item text-center  space-y-3">
   <div className='grid place-items-center'>
    <StaticImage class="w-[5rem]" src='../../../images/parking.png' />
   </div>
    <h3 className='text-[#22272d] font-[600] text-[19ox]'>Free Parking Lot</h3>
    <p className='text-[16px] text-[#888] '>Filet mignon buffalo shankle leberkas, porchetta frankfurter.</p>
</div>
<div className="item text-center  space-y-3">
   <div className='grid place-items-center'>
     <StaticImage class="w-[5rem]" src='../../../images/fast-delivery.png' />
   </div>
    <h3 className='text-[#22272d] font-[600] text-[19ox]'>Fast Dlivery</h3>
    <p className='text-[16px] text-[#888] '>Filet mignon buffalo shankle leberkas, porchetta frankfurter.</p>
</div>

    </div>
    </div>
}