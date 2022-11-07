import React from "react";
import Productgrid from "../../components/Productgrid";

export default {
  title: "Productgrid",
  component: Productgrid,
  argType: {
    colors: "#000",
  },
};

const Template = (args) => <Productgrid {...args} />;

export const desktop = Template.bind({});
desktop.args = {
  desktop: 10,
  colors: "white",
  columnpadding: 30,
};
export const mobile = Template.bind({});
mobile.args = {
  mobile: "2",
};
