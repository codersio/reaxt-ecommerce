import Productsinglepage from "../../components/Tmplatefilemerge/Minimog/productsinglepage";

export default {
  title: "minimogproductdetails/Productsinglepage",
  component: Productsinglepage,
};

const Template = (args) => <Productsinglepage {...args} />;

export const Productsinglepages = Template.bind({});

Productsinglepages.args = {
  minimog: {
    mainmenu: [
      {
        name: "Home",
        submenu: [
          {
            title: "home1",
          },
          {
            title: "home2",
          },
        ],
      },
      {
        name: "About",
        // submenu: [
        //   {
        //     title: "home1",
        //   },
        //   {
        //     title: "home2",
        //   },
        // ],
      },
      {
        name: "Product",
        // submenu: [
        //   {
        //     title: "home1",
        //   },
        //   {
        //     title: "home2",
        //   },
        // ],
      },
      {
        name: "Blog",
        // submenu: [
        //   {
        //     title: "home1",
        //   },
        //   {
        //     title: "home2",
        //   },
        // ],
      },
      {
        name: "Pages",
        // submenu: [
        //   {
        //     title: "home1",
        //   },
        //   {
        //     title: "home2",
        //   },
        // ],
      },
    ],
    productsingleimage: [
      {
        id: 1,
        image:
          "https://minimog-4437.kxcdn.com/wp-content/uploads/2021/12/product_fashion_15_a_4-570x760.jpg",
      },
      {
        id: 2,
        image:
          "https://minimog-4437.kxcdn.com/wp-content/uploads/2021/12/product_fashion_15_a_6-570x760.jpg",
      },
      {
        id: 3,
        image:
          "https://minimog-4437.kxcdn.com/wp-content/uploads/2021/12/product_fashion_04_3-570x760.jpg",
      },
      {
        id: 4,
        image:
          "https://minimog-4437.kxcdn.com/wp-content/uploads/2021/12/product_fashion_04_2-570x760.jpg",
      },
    ],
    slider: [
      {
        id: 1,
        image:
          "https://minimog.thememove.com/wp-content/uploads/2021/12/h3_slide_02.jpg",
      },
      {
        id: 2,
        image:
          "https://minimog.thememove.com/wp-content/uploads/2021/12/h3_slide_01.jpg",
      },
    ],

    category: [
      {
        id: 1,
        image:
          "https://minimog-4437.kxcdn.com/wp-content/uploads/2022/01/cat-fashion-09-180x180.jpeg",
        title: "Sneakers",
        item: "11",
      },
      {
        id: 2,
        image:
          "https://minimog-4437.kxcdn.com/wp-content/uploads/2022/01/cat-fashion-07-180x180.jpeg",
        title: "Shoes",
        item: "1",
      },
      {
        id: 3,
        image:
          "https://minimog-4437.kxcdn.com/wp-content/uploads/2022/01/cat-fashion-08-180x180.jpeg",
        title: "Sandals",
        item: "44",
      },
      {
        id: 4,
        image:
          "https://minimog-4437.kxcdn.com/wp-content/uploads/2022/01/cat-fashion-08-180x180.jpeg",
        title: "Leather Bag",
        item: "44",
      },
      {
        id: 5,
        image:
          "https://minimog-4437.kxcdn.com/wp-content/uploads/2022/01/cat-fashion-05-180x180.jpeg",
        title: "Leather Bag",
        item: "4",
      },
      {
        id: 6,
        image:
          "https://minimog-4437.kxcdn.com/wp-content/uploads/2022/01/cat-fashion-05-180x180.jpeg",
        title: "Leather Bag",
        item: "4",
      },
      {
        id: 6,
        image:
          "https://minimog-4437.kxcdn.com/wp-content/uploads/2022/01/cat-fashion-05-180x180.jpeg",
        title: "Leather Bag",
        item: "4",
      },
    ],
    categorysection: [
      {
        title: "Season Collection",
        description: "Must-have pieces selected every month",
      },
    ],
    productsection: "This week’s highlights",

    product: [
      {
        id: 1,
        title: "Wool-blend Jacket",
        storePrice: "$87.00",
        Mrp: "$98.00",
        colorid: 1,
        image:
          "https://minimog-4437.kxcdn.com/wp-content/uploads/2021/12/product_fashion_13_b_2-450x600.jpg",
        color: [
          {
            id: 1,
            title: "#000",
            image:
              "https://minimog-4437.kxcdn.com/wp-content/uploads/2021/12/product_fashion_15_a_6-450x600.jpg",
          },
          {
            id: 2,
            title: "#94ad7e",
            image:
              "https://minimog-4437.kxcdn.com/wp-content/uploads/2021/12/product_fashion_13_d_1-570x760.jpg",
          },
        ],
      },
      {
        id: 2,
        title: "Stripe Cotton Shirt",
        storePrice: "$87.00",
        // Mrp: "$98.00",
        colorid: null,
        image:
          "https://minimog-4437.kxcdn.com/wp-content/uploads/2021/12/product_fashion_07_2-450x600.jpg",
        // color: [
        //   {
        //     id: 1,
        //     title: "#000",
        //     image:
        //       "https://minimog-4437.kxcdn.com/wp-content/uploads/2021/12/product_fashion_15_a_6-450x600.jpg",
        //   },
        //   {
        //     id: 2,
        //     title: "#94ad7e",
        //     image:
        //       "https://minimog-4437.kxcdn.com/wp-content/uploads/2021/12/product_fashion_13_d_1-570x760.jpg",
        //   },
        // ],
      },
    ],

    tabsdes: [
      {
        id: 1,
        name: "Shipping and Returns",
        deta: {
          id: 1,
          title: null,
          description:
            "Shipping cost is based on weight. Just add products to your cart and use the Shipping Calculator to see the shipping price. We want you to be 100% satisfied with your purchase. Items can be returned or exchanged within 30 days of delivery.",
        },
      },
      {
        id: 2,
        name: "Product details",
        deta: {
          id: 2,
          title: "The Iconic Silhouette",
          description:
            "He garments labelled as Committed are products that have been produced using sustainable fibers or processes, reducing their environmental impact. Mango’s goal is to support the implementation of practices more committed to the environment, and therefore increase the number of sustainable garments in the collection.",
        },
      },
      {
        id: 3,
        name: "Review",
        deta: {
          id: 3,
          title: null,
          description: null,
        },
      },
    ],
  },
};
