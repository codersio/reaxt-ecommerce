import React from "react";
import Productcard7 from "../../components/Product/ProductCard7";
export default {
  title: "Productcard7",
  component: Productcard7,
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

const Template = (args) => <Productcard7 {...args} />;
export const Productcards = Template.bind({});

Productcards.args = {
  product: {
    productName: "Self Design Fit and Flare Dress",
    productCategory: "Ishin",
    produtImage:
      "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8c2hpcnR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    variantName: "Size",
    variants: [
      { size: "xxl", mrp: 100, storePrice: 80 },
      { size: "xl", mrp: 100, storePrice: 80 },
      { size: "l", mrp: 100, storePrice: 80 },
      { size: "m", mrp: 100, storePrice: 80 },
    ],
    productMrp: 100,
    productStoreprice: 100,
  },
};
