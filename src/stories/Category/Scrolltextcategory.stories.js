import React from "react";
import Scrollcategory from "../../components/Category/Scrollcategorytitle/index.js";
export default {
  title: "Scrollcategory",
  component: Scrollcategory,
  argTypes: {
    titleColor: { control: "color" },
    borderColor: { control: "color" },
  },
};

const Template = (args) => <Scrollcategory {...args} />;
export const Scrollcategorys = Template.bind({});
Scrollcategorys.args = {
  title: "Indoor",
};
