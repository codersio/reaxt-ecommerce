import React from "react";
import Productcard8 from "../../components/Product/Productcard8";
export default {
  title: "Productcard8",
  component: Productcard8,
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

const Template = (args) => <Productcard8 {...args} />;
export const Productcards = Template.bind({});

Productcards.args = {
  product: {
    productName:
      "WickedGud Macaroni Pasta | Maida Free | Vegan | Gluten Free | High Protein Pasta",
    productCategory: "Ishin",
    produtImage:
      "https://rukminim1.flixcart.com/image/416/416/l0lbrm80/tea/d/g/r/-original-imagccn5en4vadh2.jpeg?q=70",
    variantName: "weight",
    unit: "gram",
    variants: [
      { weight: 500, mrp: 100, storePrice: 80 },
      { weight: 1000, mrp: 200, storePrice: 140 },
    ],
    productMrp: 100,
    productStoreprice: 100,
  },
};
