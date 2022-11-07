import React from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export default function Minimoground({ Minimodata }) {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 6,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  }
  return (
    <Carousel
      className="roundcateory scroll-container  "
      responsive={responsive}
      arrows={false}
    >
      {Minimodata.category.map((item,idx) => (
        <div key={idx} className="category-item w-[10rem] space-y-4">
          <div className="image w-[9rem] rounded-full overflow-hidden m-auto">
            <img
              // className="rounded-full"
              src={item.image}
              alt=""
            />
          </div>
          <div className=" flex space-x-2 justify-center">
            <h3 className="text-[20px] font-[600]">{item.title}</h3>
            <span className="text-[14px]">{item.item}</span>
          </div>
        </div>
      ))}
    </Carousel>
  );
}
