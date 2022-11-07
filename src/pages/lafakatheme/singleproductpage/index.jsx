import React from 'react';
import Lafakanavbar from '../../../components/Navbarcomponent/lafaka';
import Lafakaproduct from '../../../components/Newproductgrid/lafkaproduct';
import Lafakasingletheme from '../../../components/singleProduct/Lafakasingle';
import Lafak from "../Lafaka.json"
import Footer from '../../../components/lafakahomepagesectinon/footer';
export default function Lafakesingleproduttheme(){
    return  <div className='lafaka-single-container font-lafaka-theme-font space-y-9'>
       <div className="header">
         <Lafakanavbar/>
       </div>
       <div className="single-product px-[5rem]">
        <div className="burm text-[11px]">
            HOME / BURGERS / BACON CHEESEBURGER
        </div>
<div className=''>
    <Lafakasingletheme/>
</div>
       </div>

       <div className=" space-y-9">
        <div className="like-product-container flex space-x-8">
        <div className="row w-[50%] text-center">
            <h3 className='text-[22px] font-[600] text-lafaka-theme-heading-title-color'>You may also like…</h3>
        </div>
        <div className="row">
             <Lafakaproduct Lafak={Lafak}/>
        </div>
       </div>

       <div className="product-lv-container space-y-8 ">
        <div className="heading grid place-items-center">
            <h3 className='text-[29px] text-lafaka-theme-heading-title-color font-[600]'>Other Burgers You'll Love</h3>
            <div className='w-[6rem] h-[0.2rem] bg-lafaka-theme-heading-underline-color'></div>
        </div>
        <div className="grid place-items-center px-[15rem]">
            <Lafakaproduct Lafak={Lafak} />
        </div>
       </div>
       </div>
       <div className="footer">
        <Footer/>
       </div>
    </div>
}