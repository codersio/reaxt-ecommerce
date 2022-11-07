import React from "react";
import PropTypes from "prop-types";
import "./style.scss";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
export default function Singleproduct4() {
  return (
    <>
      <div className="container ">
        <div className="row">
          <div className=" block m-auto">
            <Carousel autoPlay={true} showThumbs={false}>
              <img
                className="w-[50px]"
                src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=480,h=480/app/images/products/full_screen/pro_406721.jpg"
                alt=""
                srcset=""
              />
              <img
                className="w-[50px]"
                src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=480,h=480/app/images/products/sliding_image/406721a.jpg"
                alt=""
                srcset=""
              />
            </Carousel>
          </div>
        </div>
        <div className="row   p-4 ">
          <h3 className="text-sm    ">
            {" "}
            Home / Breakfast Cereal /{" "}
            <span className="text-slate-400">Kellogg's Original Cereals</span>
          </h3>
          <h2 className="text-xl">Kellogg's Original Cereals Corn Flakes</h2>
        </div>
        <div className="container-child flex space-x-2  p-3">
          <div className="border rounded-lg flex justify-center min-w-fit  p-1 space-x-3">
            <input
              className=" w-4 text-green-500  checked:bg-red-400 bg-black"
              type="radio"
              name=""
              id=""
            />{" "}
            <div className=" ">
              <span className="font-semibold">875 g</span> <br />{" "}
              <span>
                $375 <s>$2500</s>
              </span>
            </div>
          </div>
          <div className="border rounded-lg flex justify-center w-[30%]  p-1 space-x-3">
            <input
              className=" w-4 text-green-500  checked:bg-red-400 bg-black"
              type="radio"
              name=""
              id=""
            />{" "}
            <div className="">
              <span className="font-semibold">875 g</span>
              <br /> <span>$375</span>
            </div>
          </div>
        </div>
        <div className="p-3">
          <button className="  rounded-md border-green-500 border w-24 h-10 font-bold text-green-500  ">
            ADD
          </button>
        </div>
        <div className="product-d p-3 space-y-3">
          <h3 className="text-xl text-slate-600">Product Details</h3>
          <table className="text-xs  border-slate-400">
            <td className="border w-[5rem] p-1">Key Features</td>
            <td className=" border text-sm p-1 text-slate-400">
              Kellogg’s Corn Flakes is a nourishing and tasty ready-to-eat
              breakfast cereal which is High in Iron, Vitamin C and key
              essential B group Vitamins such as B1, B2, B3, B6, B12 and Folate.
              Kellogg’s Corn Flakes Original is naturally cholesterol free. It
            </td>
          </table>
        </div>
        <div className="product-d p-3 space-y-3">
          <h3 className="text-xl text-slate-600">Product Description</h3>
          <p className=" text-justify text-slate-400">
            Kellogg’s Corn Flakes is a nourishing and tasty ready-to-eat
            breakfast cereal which is High in Iron, Vitamin C and key essential
            B group Vitamins such as B1, B2, B3, B6, B12 and Folate. Kellogg’s
            Corn Flakes Original is naturally cholesterol free. It contains only
            1% Fat. You can count on Kellogg’s for a great tasting and
            convenient breakfast that is nourishing. These corn flakes are made
            from sun ripened corn. The selected grains are cooked, flattened and
            are gently toasted to develop into your delicious golden crispy
            cereal. Kellogg’s Corn Flakes is a quick and convenient breakfast
            option that is ready in minutes. Serve it with milk or curd/yoghurt
            and top it with fresh fruits such as bananas, strawberry or mangoes,
            dry fruits, honey and enjoy a nourishing breakfast. Break the
            monotony of breakfast and use Kellogg’s Corn Flakes as a
            nourishing/tasty ingredient in a variety of recipes. Use it to
            prepare various tasty delights loved by kids and adults alike.
          </p>
        </div>
      </div>
    </>
  );
}
