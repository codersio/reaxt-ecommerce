import React from "react";
import SquareGridcategory from "../../components/Category/SquareGridcategory";
export default {
  title: "SquareGridcategory",
  component: SquareGridcategory,
  argTypes: {
    titleColor: { control: "color" },
  },
};

const Template = (args) => <SquareGridcategory {...args} />;

export const SquareGridcategories = Template.bind();
SquareGridcategories.args = {
  name: "Fruit & Vegitable",
  image:
    "https://i.pinimg.com/736x/cc/b6/e4/ccb6e4a8e05ff8a702129288285cc80d--vegetable-basket-eating-vegetables.jpg",
};
