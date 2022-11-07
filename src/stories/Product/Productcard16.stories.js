import React from "react";
import Productcard16 from "../../components/Product/Productcard16";
export default {
  title: "Productcard16",
  component: Productcard16,
  argTypes: {
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

const Template = (args) => <Productcard16 {...args} />;
export const Productcards = Template.bind({});

Productcards.args = {
  product: {
    productName: "IndoPrimo Men's Regular Fit Cotton Casual Shirt",
    productCategory: "HUMJOLI",
    produtImage: "https://m.media-amazon.com/images/I/71ZFayjCD-L._UL1500_.jpg",
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
