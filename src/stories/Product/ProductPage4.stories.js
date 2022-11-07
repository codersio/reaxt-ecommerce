import React from "react";
import ProductPage4 from "../../components/Product/ProductcartPage4";

export default {
  title: "ProductPage4",
  component: ProductPage4,
  argsType: {
    titleCOlor: { control: "color" },
    priceColor: { control: "color" },
    discountCOlor: { contraol: "color" },
    buttonBackground: { control: "color" },
    categoryCOlor: { control: "color" },
    Cartvisible: {
      control: "boolean",
    },
  },
};

const Template = (args) => <ProductPage4 {...args} />;
export const Productpage = Template.bind({});

Productpage.args = {
  product: {
    productName: "Adidos Human Race",
    productCategory: "Puma",
    image:
      "https://demo.xpeedstudio.com/marketov2/furniture/wp-content/uploads/sites/11/2018/10/1-min-1-253x200-1.png",
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
