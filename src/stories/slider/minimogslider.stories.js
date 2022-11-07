import React from "react";

import Minimogslider from "../../components/slider/minimogslider";
export default {
  title: "Minimogslider",
  component: Minimogslider,
  argTypes: {
    showThumbs: {
      control: "boolean",
      type: "check",
    },
    autoPlay: {
      control: "boolean",
    },
    centerMode: {
      control: "boolean",
    },
    infiniteLoop: {
      control: "boolean",
    },
    showArrows: {
      control: "boolean",
    },
    showIndicators: {
      control: "boolean",
    },
    stopOnHover: {
      control: "boolean",
    },
    swipeable: {
      control: "boolean",
    },
    useKeyboardArrows: {
      control: "boolean",
    },
  },
};

const Template = (args) => <Minimogslider {...args} />;
export const Slidertem = Template.bind({});
Slidertem.args = {
  sliders: [
    {
      id: 1,
      image:
        "https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/7/28/0174e4d7-448c-4746-8572-69461ad5be101659020268081-Tops---Tees_Desk.jpg",
    },
    {
      id: 2,
      image:
        "https://assets.myntassets.com/w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/7/25/b656a7f4-4688-4997-bb7c-54b78793981e1658752386588-Western-Wear_Desk.jpg",
    },
    {
      id: 3,
      image:
        "https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/7/25/9be788ff-39a4-4214-99d0-fc97505aae5a1658752545685-USPA_Desk_Banner.jpg",
    },
  ],
  interval: "2000",
};
