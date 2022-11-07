import React from "react";

import Productcartpage6 from "../../components/Product/productcartpage6";

export default {
  title: "Productcartpage6",
  component: Productcartpage6,
};

const Template = () => <Productcartpage6 />;

export const Productcartpages = Template.bind({});
Productcartpages.args = {
  product: {
    ProductName: "Nik Blazer nid",
    images:
      "https://lusion.arrowtheme.com/wp-content/uploads/2020/10/minimalist-img-14.jpg.webp",
    mrp: "897",
  },
};
