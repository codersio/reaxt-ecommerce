import React from "react";

import Leoslider from "../../components/slider/leoslider";
export default {
    title: "Sliderall/Leoslider",
    component: Leoslider,
    // argTypes: {
    //     showThumbs: {
    //         control: "boolean",
    //         type: "check",
    //     },
    //     autoPlay: {
    //         control: "boolean",
    //     },
    //     centerMode: {
    //         control: "boolean",
    //     },
    //     infiniteLoop: {
    //         control: "boolean",
    //     },
    //     showArrows: {
    //         control: "boolean",
    //     },
    //     showIndicators: {
    //         control: "boolean",
    //     },
    //     stopOnHover: {
    //         control: "boolean",
    //     },
    //     swipeable: {
    //         control: "boolean",
    //     },
    //     useKeyboardArrows: {
    //         control: "boolean",
    //     },
    // },
};

const Template = (args) => <Leoslider {...args} />;
export const Slidertem = Template.bind({});
Slidertem.args = {
    sliders: [
        {
            id: 1,
            image:
                "https://demo1.leotheme.com/leo_wooden_demo/themes/leo_wooden/assets/img/modules/leoslideshow/2.jpg",
        },
        {
            id: 2,
            image:
                "https://demo1.leotheme.com/leo_wooden_demo/themes/leo_wooden/assets/img/modules/leoslideshow/1.jpg",
        },
        {
            id: 3,
            image:
                "https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/7/25/9be788ff-39a4-4214-99d0-fc97505aae5a1658752545685-USPA_Desk_Banner.jpg",
        },
    ],
    interval: "2000",
};
