import React from "react";
// import Index from "../../components/Category/Sqareroundedcategory";
import Categoryimagetexts from "../../components/Category/categoryimageOvertext";
export default {
  title: "Categoryimagetexts",
  component: Categoryimagetexts,
  argTypes: {
    // label: 'This is just a headline',
    titleColor: { control: "color" },
    backGround: { control: "color" },
  },
};

const Template = (args) => <Categoryimagetexts {...args} />;
export const Categoryimagetextss = Template.bind({});
Categoryimagetextss.args = {
  name: "Mobile",
  image:
    "https://images.unsplash.com/photo-1605236453806-6ff36851218e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
};
