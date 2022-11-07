import React from "react";
import Productcard11 from "../../components/Product/productCard11";

export default {
  title: "Productcard11",
  component: Productcard11,
  argTypes: {
    Cartvisible: {
      control: "boolean",
    },
  },
};

const Template = (args) => <Productcard11 {...args} />;

export const Productpage = Template.bind({});
Productpage.args = {
  product: {
    productName: "Oudh 1590",
    productCategory: "Ishin",
    productImage:
      "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
    maxQty: 5,
    minQty: 1,
    unit: "gram",
    variantNames: ["weight"],
    variants: [
      { weight: 500, mrp: 100, storePrice: 80 },
      { weight: 1000, mrp: 200, storePrice: 140 },
    ],
    productMrp: 100,
    productStoreprice: 100,
  },
};
