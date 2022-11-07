import React from "react";
import Productpage5 from "../../components/Product/Productcart5";
export default {
  title: "Productpage5",
  component: Productpage5,
  argTypes: {
    Cartvisible: {
      control: "boolean",
    },
  },
};

const Template = (args) => <Productpage5 {...args} />;
export const Productpages = Template.bind({});
Productpages.args = {
  product: {
    productName: "Special egg chicken thali",
    productCategory: "Enthusiastically morph future-proof services withou",
    productImage:
      "https://minimog-4437.kxcdn.com/wp-content/uploads/2021/12/product_sneaker_09_4-570x760.jpg",
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
