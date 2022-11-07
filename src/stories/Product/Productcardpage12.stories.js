import React from "react";

import ProductPage12 from "../../components/Product/Productcardpage12";

export default {
  title: "ProductPage12",
  component: ProductPage12,
  argsType: {
    titleCOlor: { control: "color" },
    priceColor: { control: "color" },
    discountCOlor: { contraol: "color" },
    buttonBackground: { control: "color" },
    categoryCOlor: { control: "color" },
  },
};

const Template = (args) => <ProductPage12 {...args} />;
export const Productpage = Template.bind({});

Productpage.args = {
  product: {
    productName: "Ashirbad attassssssssssss",
    variantName: ["weight"],
    maxQty: 5,
    minQty: 1,
    unit: "gram",
    variants: [
      { weight: 500, mrp: 100, storePrice: 80 },
      { weight: 1000, mrp: 200, storePrice: 140 },
    ],
    productMrp: 100,
    productStoreprice: 100,
  },

  image:
    "https://demo.xpeedstudio.com/marketov2/furniture/wp-content/uploads/sites/11/2018/10/1-min-1-253x200-1.png",
};
