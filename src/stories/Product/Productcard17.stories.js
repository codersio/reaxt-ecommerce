import React from "react";
import Productcard17 from "../../components/Product/Productcard17";

export default {
  title: "Productcard17",
  component: Productcard17,
};

const Template = (args) => <Productcard17 {...args} />;

export const Productpage = Template.bind({});
Productpage.args = {
  product: {
    productName: "Extra light olive oil",
    productCategory: "Freshq",
    productImage:
      "https://images.unsplash.com/photo-1518843875459-f738682238a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1142&q=80",
    maxQty: 5,
    minQty: 1,
    unit: "gram",
    variantNames: ["weight"],
    variants: [
      { weight: 500, mrp: 100, storePrice: 80 },
      { weight: 1000, mrp: 200, storePrice: 140 },
    ],
    productMrp: 2199,
    productStoreprice: 7189,
  },
};
