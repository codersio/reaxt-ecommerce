import React from "react";
import Productcard13 from "../../components/Product/Productcardpage13";
export default {
  title: "Productcard13",
  component: Productcard13,
  argsType: {
    titleColor: { control: "color" },
    productMrp: { control: "color" },
    productStoreprice: { contraol: "color" },
    buttonBackground: { control: "color" },
    categoryCOlor: { control: "color" },
    variantColor: {
      control: "color",
    },
    Cartvisible: {
      control: "boolean",
    },
  },
};

const Template = (args) => <Productcard13 {...args} />;
export const Productcards = Template.bind({});

Productcards.args = {
  product: {
    productName: "Men Outdoor packable shorts ",
    productCategory: "HRX by Hrithick Roshan",
    produtImage:
      "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8c2hpcnR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    variantName: "Size",
    maxQty: 5,
    minQty: 1,
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
