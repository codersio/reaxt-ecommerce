import React from "react";
import Productcard14 from "../../components/Product/Productcard14";
export default {
  title: "Productcard14",
  component: Productcard14,
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

const Template = (args) => <Productcard14 {...args} />;
export const Productcards = Template.bind({});

Productcards.args = {
  product: {
    productName: "Men Outdoor packable shorts ",
    productCategory: "Puma",
    produtImage: "https://m.media-amazon.com/images/I/713UmakQhoL._UY575_.jpg",
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
