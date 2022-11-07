import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';
// import "./leoslider.scss"
import "./animated.scss"
export  default function Leoslider({sliders}){
  const  slde={
      slider: 'slider',
      previousButton: 'previousButton',
      nextButton: 'nextButton',
      buttonDisabled: 'disabled',
      track: 'track',
      slide: 'slide',
      hidden: 'hidden',
      previous: 'previous',
      current: 'current',
      next: 'next',
      animateIn: 'animateIn',
      animateOut: 'animateOut',
    }
    return <div>
<Slider>
    {
        sliders.map(item=>(
            <div className=" relative animateIn">
                <img className="w-full h-full animateIn animated zoomIn"  src={item.image} alt=""/>
                <h1   className="absolute top-0 animateIn animated zoomIn duration-150 "> Lorem ipsum dolor sit amet, consectetur adipisicing elit.</h1>
            </div>
        ))
    }
</Slider>

    </div>
}