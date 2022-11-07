
import React,{useState} from "react"
import Minimognavbar from "../../../components/Navbarcomponent/minimognavbar";
import Minimodata from "../Minimodata.json";
import Minimogslider from "../../../components/slider/minimogslider";
// import Minimogroundcategory from "../../../components/newCategories/minimoground";
import Minimogproduct from "../../../components/Newproductgrid/minimogproduct";
import Minimogfooter from "../../../components/Footer/minimogfooter";
import Minimoground from "../../../components/newCategories/minimoground";
import Minimogview from "../../../components/Viewmodal/minimog";
import {Link} from "gatsby"
export default function Minimogtheme(){
    const [logmodal,setLogmodal]=useState(false)
const [viewmodal,setViewModal]=useState(false)

const handleView=()=>{
    setViewModal(!viewmodal);
}

    return(<div className="font-minimog-theme-font relative">

        <Minimognavbar logmodal={logmodal} Minimodata={Minimodata} setLogmodal={setLogmodal}/>
        <Minimogview Minimodata={Minimodata} viewmodal={viewmodal} setViewModal={setViewModal} handleView={handleView}/>
        <Minimogslider Minimodata={Minimodata}/>
        <div className="px-[3rem]">
            <div className="category-section flex  py-[4.25rem] space-x-[5rem] overflow-hidden">
                <div className="item w-[14%]">
                    {Minimodata.categorysection.map((item) => (
                        <div>
                            <h3 className="text-[42px] text-minimog-theme-title-color font-minimog-theme-font">
                                {item.title}
                            </h3>
                            <p className="text-[16px] text-minimog-theme-default-title-color font-minimog-theme-font">
                                {item.description}
                            </p>
                        </div>
                    ))}
                </div>
                <div className="item w-[86%]">
                    <Minimoground Minimodata={Minimodata} />
                </div>
            </div>

            {/* CATEGORY SECTION END */}

            <div className="product-section space-y-4">
                <div className="heading grid place-items-center">
                    <h3 className="text-minimog-theme-default-color text-[36px] font-minimog-theme-font font-[400]">
                        {Minimodata.productsection}
                    </h3>
                </div>
                <div className="py-4">
                    <Minimogproduct Minimodata={Minimodata} handleView={handleView}/>
                </div>
                <div className="button-section grid place-items-center">
                    <button className="p-3 rounded-lg border-minimog-theme-border-color border w-[10%] text-center">
                       <Link to="/Minimogtheme/mshopp">Shop Now</Link>
                    </button>
                </div>
            </div>
            {/* PRODUCT SECTION END */}
            <Minimogfooter  />
        </div>
    </div>)
}