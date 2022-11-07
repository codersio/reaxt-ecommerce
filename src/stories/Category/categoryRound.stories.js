import React from "react";
import CategoryRound from "../../components/Category/CategoryRound";

export default {
  title: "CategoryRound",
  component: CategoryRound,
  argTypes: {
    // label: 'This is just a headline',
    titleColor: { control: "color" },
  },
};
const Template = (args) => <CategoryRound {...args} />;
export const CategoriesRounds = Template.bind({});

CategoriesRounds.args = {
  name: "Blankets",
  image:
    "https://images.unsplash.com/photo-1592179900431-1e021ea53b28?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
};
