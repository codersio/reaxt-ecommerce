import React from 'react';

import { FaRegHeart } from 'react-icons/fa';
import { FiShoppingBag } from 'react-icons/fi';


export default function BodySection3(){
    return <div>
      
          <div className='section3-container font-lafaka-theme-font grid place-items-center py-[6rem] px-[5rem]'>
        <div className="row grid grid-cols-2 gap-[5rem]">
            <div className="item flex  space-x-3">
                <div className="image w-[10rem] relative">
                    <img src="https://lafka.althemist.com/fastfood/wp-content/uploads/sites/2/2019/03/side6-440x440.jpg" alt="" />
                
                <div className="icon w-[2rem] h-[2rem] rounded-full grid place-items-center absolute bottom-5
                 bg-white right-0">
                    <FaRegHeart/>
                </div>
                </div>
                <div className="section-content space-y-1 relative">
                  <div className="item flex justify-between">
                      <h3 className='text-[17px] text-[#333]'>Buffalo Chips</h3>
                    <h3 className='text-[12px] font-[600]'>$4.99</h3>
                   
                  </div>
              <div className="flex space-x-2 justify-between">
                     <div className='w-[93%] grid place-items-center'>
                        <hr className='border w-[99%] border-black border-dotted'/>
                     </div>
                   <div className=" icon w-[2rem] h-[2rem] border rounded-full grid place-items-center top-[25px] right-0">
                    <FiShoppingBag/>
                   </div>
              </div>
                   <div className="content">
                        <p className='text-[14px] text-[#888]'>Smoked brisket, tender ribs, smoked sausage, bacon & cheddar with lettuce, tomato, house BBQ & ranch.</p>
                   </div>
                   
                </div>
            </div>
         <div className="item flex  space-x-3">
                <div className="image w-[10rem] relative">
                    <img src="https://lafka.althemist.com/fastfood/wp-content/uploads/sites/2/2019/03/side6-440x440.jpg" alt="" />
                
                <div className="icon w-[2rem] h-[2rem] rounded-full grid place-items-center absolute bottom-5
                 bg-white right-0">
                    <FaRegHeart/>
                </div>
                </div>
                <div className="section-content space-y-1 relative">
                  <div className="item flex justify-between">
                      <h3 className='text-[17px] text-[#333]'>Buffalo Chips</h3>
                    <h3 className='text-[12px] font-[600]'>$4.99</h3>
                   
                  </div>
              <div className="flex space-x-2 justify-between">
                     <div className='w-[93%] grid place-items-center'>
                        <hr className='border w-[99%] border-black border-dotted'/>
                     </div>
                   <div className=" icon w-[2rem] h-[2rem] border rounded-full grid place-items-center top-[25px] right-0">
                    <FiShoppingBag/>
                   </div>
              </div>
                   <div className="content">
                        <p className='text-[14px] text-[#888]'>Smoked brisket, tender ribs, smoked sausage, bacon & cheddar with lettuce, tomato, house BBQ & ranch.</p>
                   </div>
                   
                </div>
            </div>
        </div>
    </div>
    </div>
  
}