import React from "react";
import ProductFixedgrid from "../../components/Productfixedgrid.js";

export default {
  title: "ProductFixedgrid",
  component: ProductFixedgrid,
};

const Template = (args) => <ProductFixedgrid {...args} />;

export const Productgriditem = Template.bind({});
Productgriditem.args = {
  products: {
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

export const Desktopgrid = Template.bind({});

Desktopgrid.args = {
  products: {
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
  Desktopgrid: 5,
  padding: 1,
  margin: 1,
  marginLeft: 1,
  marginRight: 1,
  paddingLeft: 1,
  paddingRight: 1,
  paddingTop: 1,
};

export const MobileGrid = Template.bind({});

MobileGrid.args = {
  products: {
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
  MobileGrid: 5,
  padding: 0,
  margin: 1,
  marginLeft: 1,
  marginTop: 0,
  marginBottom: 0,
  marginRight: 1,
  paddingLeft: 1,
  paddingRight: 1,
  paddingTop: 1,
  border: "",
};
