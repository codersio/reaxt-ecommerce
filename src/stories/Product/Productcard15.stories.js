import React from "react";
import Productcard15 from "../../components/Product/Productcard15";
export default {
  title: "Productcard15",
  component: Productcard15,
  argsType: {
    titleColor: { control: "color" },
    productMrp: { control: "color" },
    productStoreprice: { contraol: "color" },
    buttonBackground: { control: "color" },
    categoryCOlor: { control: "color" },
    variantColor: {
      control: "color",
    },
  },
};

const Template = (args) => <Productcard15 {...args} />;
export const Productcards = Template.bind({});

Productcards.args = {
  product: {
    productName: "Dennis Lingo Men's Checkered Slim fit Casual Shirt",
    productCategory: "Puma",
    produtImage: "https://m.media-amazon.com/images/I/713UmakQhoL._UY575_.jpg",
    variantName: "Size",
    variants: [
      { size: "xxl", mrp: 100, storePrice: 80 },
      { size: "xl", mrp: 100, storePrice: 80 },
      { size: "l", mrp: 100, storePrice: 80 },
      { size: "m", mrp: 100, storePrice: 80 },
    ],
    productMrp: 2199,
    productStoreprice: 7189,
  },
};
