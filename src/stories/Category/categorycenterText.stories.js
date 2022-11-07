import React from "react";
import CategorycenterText from "../../components/Category/CategoryCentertext(change)";
export default {
  title: "CategorycenterText",
  component: CategorycenterText,
  argTypes: {
    // label: 'This is just a headline',
    titleColor: { control: "color" },
    backGround: { control: "color" },
  },
};

const Template = (args) => <CategorycenterText {...args} />;
export const Categorycentertexts = Template.bind({});
Categorycentertexts.args = {
  product: [
    {
      productName: "Oudh 1590",
      productCategory: "Ishin",
      productImage:
        "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
      variantName: "weight",
      unit: "gram",
      variants: [
        { weight: 500, mrp: 100, storePrice: 80 },
        { weight: 1000, mrp: 200, storePrice: 140 },
      ],
      productMrp: 100,
      productStoreprice: 100,
    },
  ],
};
