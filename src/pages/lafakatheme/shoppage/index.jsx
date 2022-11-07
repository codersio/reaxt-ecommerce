import { StaticImage } from 'gatsby-plugin-image'
import React from 'react'
import Lafakanavbar from '../../../components/Navbarcomponent/lafaka'
import Lafakaproduct from "../../../components/Newproductgrid/lafkaproduct"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Lafak from "../Lafaka.json"
import {
  faPen,
  faPencil,
  faClock,
  faTicket,
  faTractor,
  faTruckFast,
} from "@fortawesome/free-solid-svg-icons";

import Footer from '../../../components/lafakahomepagesectinon/footer';
export default function Shoppage(){
    return <div className='shop-container font-lafaka-theme-font'>
        <div className="banner bg-cover bg-no-repeat bg-center bg-fixed bg-[url('https://lafka.althemist.com/fastfood/wp-content/uploads/sites/2/2021/06/burgers-category-hero-title.jpg')]">
            {/* <StaticImage src=/> */}
<div className="">
     <Lafakanavbar/>
</div>


<div className="title px-[6rem] py-[7rem]">
    <h3 className='text-[64px] font-[700] text-lafaka-theme-button-bg-title-color'>BURGERS</h3>
    <p className='text-[21px] w-[46%] font-[600] text-lafaka-theme-button-bg-title-color'>Choose a hand-crafted, made-to-order Burger from our menu. We handsmash all our burgers to lock in flavor, then serve them up on a delicious, toasted brioche bun. Served with fries.</p>
</div>
        </div>
      
      <div className="product-section py-[5rem]">
        <div className="grid place-items-end">
            <div className="utem w-[32%] bg-lafaka-theme-address-bg-color text-[14px] rounded-lg flex space-x-3 p-2 text-[#666]">
            <div
              className="item border w-[20%] 
            h-8 p-2 flex space-x-2 md:w-[15%] 
            justify-center border-lafaka-theme-border-color  rounded-md  text-center"
            >
              <FontAwesomeIcon
                icon={faClock}
                className="text-[16px] text-lafaka-theme-icon-color"
              />
              <p className=" md:text text-[9px]">40 min.</p>
            </div>
            <div className="item flex justify-between w-[80%]">
              <div className="grid place-items-center">
                <h3 className="text-[14px]  text-[#666]">
                  Delivery from: Worldwide
                </h3>
              </div>

              <div className="grid place-items-center">
                <div className="  text-center  rounded-full w-[20px] h-[20px] bg-lafaka-theme-edit-icon-bg-color">
                  <FontAwesomeIcon
                    className=" text-[10px] text-lafaka-theme-edit-icon-color "
                    icon={faPencil}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
<Lafakaproduct Lafak={Lafak}/>
      </div>

      <div className="footer">
        <Footer/>
      </div>
    </div>
}