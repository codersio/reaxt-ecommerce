import React from "react";
import Productpage10 from "../../components/Product/ProductCardpage10";

export default {
  title: "Productpage10",
  component: Productpage10,
  argTypes: {
    Cartvisible: {
      control: "boolean",
    },
  },
};

const Template = (args) => <Productpage10 {...args} />;

export const Productpage = Template.bind({});
Productpage.args = {
  product: {
    productName: "Extra light olive oil",
    productCategory: "Ishin",
    productImage:
      "https://rukminim1.flixcart.com/image/416/416/l0lbrm80/tea/d/g/r/-original-imagccn5en4vadh2.jpeg?q=70",
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

  // product: {
  //   productName: "Ashirbad atta",
  //   maxQty: 5,
  //   minQty: 1,
  //   unit: "gram",
  //   variantNames: ["weight"],
  //   variants: [
  //     { weight: 500, mrp: 100, storePrice: 80 },
  //     { weight: 1000, mrp: 200, storePrice: 140 },
  //   ],
  // },

  // Cartvisible: Boolean,
};
