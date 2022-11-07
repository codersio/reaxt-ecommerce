import React from "react";
import Categorywithicon from "../../components/Category/Categorywithicon";
export default {
  title: "Categorywithicon",
  component: Categorywithicon,
  argTypes: {
    titleColor: { control: "color" },
    borderColor: { control: "color" },
    background: { control: "color" },
  },
};

const Template = (args) => <Categorywithicon {...args} />;
export const Categorywithicons = Template.bind({});
Categorywithicons.args = {
  title: "Indoor",
};
