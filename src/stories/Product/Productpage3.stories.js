import React from "react";

import Productpage3 from "../../components/Product/Productpage3";
export default {
  title: "Productpage3",
  component: Productpage3,
  argsType: {
    titleColor: { control: "color" },
    priceColor: { control: "color" },
    discountColor: { contraol: "color" },
    buttonBackground: { control: "color" },
    categoryColor: { control: "color" },
    Cartvisible: {
      control: "boolean",
    },
  },
};

const Template = (args) => <Productpage3 {...args} />;
export const Productpage = Template.bind({});

Productpage.args = {
  product: {
    productName: "Special egg chicken thali",
    productCategory: "Enthusiastically morph future-proof services withou",
    productImage:
      "https://klbtheme.com/bacola/multivendor/wp-content/uploads/sites/2/2021/04/product-image-62-346x310.jpg",
    variantName: ["weight"],
    unit: "gram",
    maxQty: 5,
    minQty: 1,
    variants: [
      { weight: 500, mrp: 100, storePrice: 80 },
      { weight: 1000, mrp: 200, storePrice: 140 },
    ],
    productMrp: 100,
    productStoreprice: 100,
  },
};
