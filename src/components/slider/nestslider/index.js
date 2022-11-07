import React, { useState } from "react";
import "./animated.scss";
import "./style.scss";
// import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
// import { Carousel } from "react-responsive-carousel";
export default function Nestslider() {
  const [slidernest, setSlidernet] = useState(0);
  const timeoutRef = React.useRef(null);

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  const Slider = [
    {
      id: 1,
      image:
        "https://wp.alithemes.com/html/nest/demo/assets/imgs/slider/slider-1.png",
    },
    {
      id: 2,
      image:
        "https://wp.alithemes.com/html/nest/demo/assets/imgs/slider/slider-2.png",
    },
  ];
  const delay = 2500;
  React.useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setSlidernet((prevIndex) =>
          prevIndex === Slider.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );

    return () => {
      resetTimeout();
    };
  }, [slidernest]);
  return (
    <div className="nest-slider animated">
      <img
        className=" animated bounce aa-d"
        src={Slider[slidernest].image}
        alt=""
      />
      <h1 className=" ">slide</h1>
      <button
        className="  "
        type=""
        onClick={() => {
          const leftslide = slidernest === 0;
          const newslide = leftslide ? Slider.length - 1 : slidernest - 1;
          setSlidernet(newslide);
        }}
      >
        lef
      </button>
    </div>
  );
}
