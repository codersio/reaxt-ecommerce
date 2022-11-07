import React from "react";

import Productcard1 from "../../components/Product/Productcard1";

export default {
  title: "Productcard1",
  component: Productcard1,
  argsType: {
    titleCOlor: { control: "color" },
    priceColor: { control: "color" },
    discountCOlor: { contraol: "color" },
    buttonBackground: { control: "color" },
    categoryCOlor: { control: "color" },
  },
};

const Template = (args) => <Productcard1 {...args} />;
export const ProductsimplePages = Template.bind({});

ProductsimplePages.args = {
  title: "Mathis Stationary",
  price: "458",
  categorys: "Mathis",
  image:
    "https://demo.xpeedstudio.com/marketov2/furniture/wp-content/uploads/sites/11/2018/10/1-min-1-253x200-1.png",
};
