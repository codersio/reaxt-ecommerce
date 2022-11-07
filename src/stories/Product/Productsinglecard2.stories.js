import React from "react";
import Productcardsingle2 from "../../components/Product/Productcardsingle2";

export default {
  title: "Productcardsingle2",
  component: Productcardsingle2,
  argsType: {
    titleColor: { control: "color" },
    priceColor: { control: "color" },
    storepriceColor: { contraol: "color" },
    buttonBackground: { control: "color" },
    categoryColor: { control: "color" },
    buttonTitlecolor: { control: "color" },
    offercolor: { control: "color" },
  },
};

const Template = (args) => <Productcardsingle2 {...args} />;

export const Productpage = Template.bind({});
Productpage.args = {
  product: {
    productName: "Casio Analog Black Dial Men's Watch-EQS-930DB-1AVUDF",
    productCategory: "Freshq",
    productImage: "https://m.media-amazon.com/images/I/61dFZvlEBrL._UX679_.jpg",
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
