import React from "react";
import ProductScroll from "../../components/Productscroll";
export default {
  title: "ProductScroll",
  component: ProductScroll,
};

const Template = (args) => <ProductScroll {...args} />;
export const ProductScrolls = Template.bind({});

ProductScrolls.args = {
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
