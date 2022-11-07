import React from 'react'
import Lafakanavbar from '../../components/Navbarcomponent/lafaka'
import Lafakaslider from '../../components/slider/lafaka'
import Lafakadata from "./Lafaka.json"
import Lafakacategory from '../../components/newCategories/lafakacategory'
import Lafakasection1 from '../../components/lafakahomepagesectinon/bodysection1'
import Lafakaproduct from '../../components/Newproductgrid/lafkaproduct'
import Lafak from "./Lafaka.json"
import Section2 from '../../components/lafakahomepagesectinon/bodysection2'
import Section4 from '../../components/lafakahomepagesectinon/bodysection4'
import Section3 from '../../components/lafakahomepagesectinon/bodysection3'
import Section5 from '../../components/lafakahomepagesectinon/bodysection5'
import Footer from '../../components/lafakahomepagesectinon/footer'
export default function Lafakatheme(){
    return <div className='lafaka-container-homepage font-lafaka-theme-font'>
<Lafakaslider />

<div className="lafaka-categories">
<Lafakacategory Lafakadata={Lafakadata}/>
</div>

    <div className="section1">
        <Lafakasection1/>
    </div>

    <div className="product-section">
        <div className="heading grid place-items-center space-y-2 py-8">
            <h3 className='text-[44px] text-[#22272d] font-[700] '>CHAR-GRILLED BURGERS</h3>
            <p className='text-[19px] text-[#999] w-[50%] text-center font-[600]'>Hand-crafted fresh to order. Smashed to lock in flavor on a toasted brioche bun.
Served with garlic dill pickles & fries.</p>
        </div>

<div className='product-showing px-[5rem] py-[5rem] space-y-3'>
   <div>
     <Lafakaproduct Lafak={Lafak}/>
   </div>
    <div className="grid place-items-center">
        <button className='uppercase text-[14px] font-[600] bg-lafaka-theme-button-bg-color
        text-lafaka-theme-button-bg-title-color rounded-3xl p-4 grid place-items-center'>more burgers</button>
    </div>
</div>

    </div>


    {/* end of product section  */}

    <div className='section2-container'>
<Section2/>
    </div>
    <div className='section2-container'>
        <div className="heading grid place-items-center space-y-2 py-8">
            <h3 className='text-[44px] text-[#22272d] font-[700] '>MORE GREAT SIDES</h3>
            <p className='text-[19px] text-[#999] w-[50%] text-center font-[600]'>For every main dish, there is a perfect side.</p>
        </div>
<div>
    <Section3/>
</div>
  <div className="grid place-items-center py-[3rem]">
        <button className='uppercase text-[14px] font-[600] bg-lafaka-theme-button-bg-color
        text-lafaka-theme-button-bg-title-color rounded-3xl p-4 grid place-items-center'>more burgers</button>
    </div>
    </div>

    <div className="section-container">
        <Section4/>
    </div>
    <div className="section-container">
        <Section5/>
    </div>

    <div className="footer">
        <Footer/>
    </div>
    </div>
}