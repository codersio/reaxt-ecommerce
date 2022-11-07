import React from "react";
import Productsinglecard1 from "../../components/Product/Productsiglecard1";

export default {
  title: "Productsinglecard1",
  component: Productsinglecard1,
  argsType: {
    titleColor: { control: "color" },
    priceColor: { control: "color" },
    storepriceColor: { contraol: "color" },
    buttonBackground: { control: "color" },
    categoryColor: { control: "color" },
    buttonTitlecolor: { control: "color" },
    offercolor: { control: "color" },
    Cartvisible: {
      control: "boolean",
    },
  },
};

const Template = (args) => <Productsinglecard1 {...args} />;

export const Productpage = Template.bind({});
Productpage.args = {
  product: {
    productName: "Special egg chicken thali",
    productCategory: "Enthusiastically morph future-proof services withou",
    productImage:
      "https://images.unsplash.com/photo-1585032226651-759b368d7246?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=992&q=80",
    variantName: "weight",
    maxQty: 5,
    minQty: 1,
    unit: "gram",
    variants: [
      { weight: 500, mrp: 100, storePrice: 80 },
      { weight: 1000, mrp: 200, storePrice: 140 },
    ],
    productMrp: 100,
    productStoreprice: 100,
  },
};
