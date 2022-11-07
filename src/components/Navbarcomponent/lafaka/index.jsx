import React,{useState} from 'react'
import "../../../scss/global.scss"
import "./nav.scss"
import { FaPhone } from "react-icons/fa";
import { FiUser } from "react-icons/fi";
import { IoMdHeartEmpty } from "react-icons/io";
import { FiShoppingBag } from "react-icons/fi";
import { BsSearch } from "react-icons/bs";
// import {  } from "react-icons/io5";
import { GiHamburger } from "react-icons/gi";
// import {  } from "react-icons/io5";
import { MdOutlineEmojiFoodBeverage } from "react-icons/md";
// import {  } from "react-icons/io5";
import { BiDrink } from "react-icons/bi";
import { IoIceCreamOutline,IoPizzaOutline,IoFastFoodOutline } from "react-icons/io5";
import Lafakaslider from '../../slider/lafaka';
import Lafakacartdropdown from '../../productdropdowncart/lafaka';
import Lafakalogin from '../../logincomnent/lafakalogin';
export default function Lafakanavbar(){
     const [cartmodal, seCart] = useState(false);
     const [loginmodal,setLoginmodal]=useState(false)
     const [logtab,setLogtabs]=useState(0)
     const Loginhandle=()=>{
        setLoginmodal(!loginmodal)
     }
  const Handke = () => {
    seCart(!cartmodal);
  };
    return <div className="navbar font-lafaka-theme-font space-y-2 relative">
        <Lafakacartdropdown Handke={Handke} cartmodal={cartmodal} seCart={seCart}/>
        <Lafakalogin loginmodal={loginmodal} Loginhandle={Loginhandle} setLoginmodal={setLoginmodal} logtab={logtab} setLogtabs={setLogtabs}/>
        <div className='lafafa-nav-container py-5  font-lafaka-theme-font grid place-items-center'>
      <div className=' w-full flex justify-between'>
          <div className='bg-[#222] p-[1.2rem] navbar text-center grid place-items-end   w-[40%]'>
            <ul className='text-white uppercase font-[600] text-[13px] flex space-x-5'>
                <li><a href="">Home</a></li>
                <li><a href="">Aboutlafaka</a></li>
                <li><a href=""> our blog</a></li>
                <li><a href=""> our menu</a></li>
                {/* <li><a href=""></a></li> */}
            </ul>
        </div>

        {/* END OF NAVBAR  */}

        <div className="row relative bg-[#222] w-[20%] grid place-items-center">
            <div className="curve absolute -top-[0.5rem]">
                <img className='w-[50%] m-auto' src="https://lafka.althemist.com/fastfood/wp-content/uploads/sites/2/2019/06/logo-lafka-shop.png" alt="" />
                <div className="left_div"></div>
                <div className="right_div"></div>
                <div className="bottom_curve"></div>
            </div>
        </div>

          <div className=' bg-[#222] p-[1.2rem] navbar text-center grid place-items-start   w-[40%]'>
            <ul className='text-white uppercase font-[600] text-[13px] flex space-x-5'>
                <li><a href="">Home</a></li>
                <li><a href="">Aboutlafaka</a></li>
                <li><a href=""> our blog</a></li>
                <li><a href=""> our menu</a></li>
                {/* <li><a href=""></a></li> */}
            </ul>
        </div>
      </div>

      
    </div>
    {/* end of top bar */}
     <div className="nav-container space-y-7">
         <div className="middle-bar-section px-[9rem] flex justify-between text-[21px] text-[#4b4b4b]">
        <div className="row grid place-items-center border  bg-white p-1 rounded-[5.5rem] w-[12rem]">
<h3 className='text-[13px]'>Order Online or Call Now:</h3>
<div className='text-[16px] font-[600] flex space-x-3'>
    <div className="icon grid place-items-center">
        <FaPhone/>
    </div>
    <h3> +555 234 765 1</h3>
</div>
        </div>
        <div className="row flex justify-center space-x-6 border  bg-white p-3 rounded-[5.5rem] w-[12rem]">
<div className="icon " onClick={Loginhandle}>
    <FiUser/>
</div>
<div className="icon relative">
    <IoMdHeartEmpty/>

    <div className="number absolute w-[1rem] text-[11px] -right-[0.6rem] -top-[0.2rem] font-[600] h-[1rem]
     grid place-items-center text-white rounded-full bg-[#333]">
1
    </div>
</div>
<div className="icon relative " onClick={Handke}>
    <FiShoppingBag />
    
    <div className="number absolute w-[1rem] text-[11px] -right-[0.6rem] -top-[0.2rem] font-[600] h-[1rem]
     grid place-items-center text-white rounded-full bg-[#333]">
1
    </div>
</div>
<div className="icon">
    <BsSearch/>
</div>
        </div>
      
      
      </div>
     
     <div className="navbar grid place-items-center w-full">
        <div className="nav-lafaka relative   p-4 bg-[#ffca3c] px-[9rem] rounded-md">
            <ul className='flex space-x-10 uppercase text-[15px] font-[600] text-[#61443e]'>
                <li className='flex space-x-1 '> 
              <div className="con grid place-items-center">
                  <IoPizzaOutline className='rotate-[339deg] font-[400] text-[2rem] '/></div>
                   <h3 className='grid place-items-center'>pizza</h3>
                   </li>
                <li className='flex space-x-1 '> 
              <div className="con grid place-items-center">
                  <GiHamburger className=' font-[400] text-[2rem] '/></div>
                   <h3 className='grid place-items-center'>burgers</h3>
                   </li>
                <li className='flex space-x-1 '> 
              <div className="con grid place-items-center">
                  <IoFastFoodOutline className=' font-[400] text-[2rem] '/></div>
                   <h3 className='grid place-items-center'>sandwiches</h3>
                   </li>
                <li className='flex space-x-1 '> 
              <div className="con grid place-items-center">
                  <MdOutlineEmojiFoodBeverage className=' font-[400] text-[2rem] '/></div>
                   <h3 className='grid place-items-center'>sides & salads</h3>
                   </li>
                <li className='flex space-x-1 '> 
              <div className="con grid place-items-center">
                  <IoFastFoodOutline className=' font-[400] text-[2rem] '/></div>
                   <h3 className='grid place-items-center'>combos</h3>
                   </li>
                <li className='flex space-x-1 '> 
              <div className="con grid place-items-center">
                  <BiDrink className=' font-[400] text-[2rem] '/></div>
                   <h3 className='grid place-items-center'>drinks</h3>
                   </li>
                <li className='flex space-x-1 '> 
              <div className="con grid place-items-center">
                  <IoIceCreamOutline className=' font-[400] text-[2rem] '/></div>
                   <h3 className='grid place-items-center'>desserts</h3>
                   </li>
           
            </ul>
        </div>
     </div>
     
     </div>

     
    </div>
}