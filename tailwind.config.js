/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  purge: {
    content: [
      "./src/pages/**/*.{js,jsx,ts,tsx}",
      "./src/components/**/*.{js,jsx,ts,tsx}",
      "./node_modules/@my-company/tailwind-components/**/*.js",
      "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
      // "./node_modules/tw-elements/**/js/**/*.js",
    ],
    safelist: [
      "bg-primary",
      "bg-secondary",
      {
        pattern: /p-(1|2|3|4|5|6|7|8|9|10)/,
        variants: ["lg", "md", "sm"],
      },
      {
        pattern: /grid-(cols)-(1|2|3|4|5|6|7|8|9|10)/,
        variants: ["lg", "md", "sm"],
      },
      {
        pattern: /m-(full|1|2|3|4|5|6|7|8|9|10)/,
        variants: ["lg", "md", "sm"],
      },
      {
        pattern: /pl-(full|1|2|3|4|5|6|7|8|9|10)/,
        variants: ["lg", "md", "sm"],
      },
      {
        pattern: /pr-(full|1|2|3|4|5|6|7|8|9|10)/,
        variants: ["lg", "md", "sm"],
      },
      {
        pattern: /pt-(full|1|2|3|4|5|6|7|8|9|10)/,
        variants: ["lg", "md", "sm"],
      },
      {
        pattern: /pb-(full|1|2|3|4|5|6|7|8|9|10)/,
        variants: ["lg", "md", "sm"],
      },
      {
        pattern: /ml-(full|1|2|3|4|5|6|7|8|9|10)/,
        variants: ["lg", "md", "sm"],
      },
      {
        pattern: /mt-(full|1|2|3|4|5|6|7|8|9|10)/,
        variants: ["lg", "md", "sm"],
      },
      {
        pattern: /mb-(full|1|2|3|4|5|6|7|8|9|10)/,
        variants: ["lg", "md", "sm"],
      },
      {
        pattern: /mr-(full|1|2|3|4|5|6|7|8|9|10)/,
        variants: ["lg", "md", "sm"],
      },
      {
        pattern: /border-(border|2)/,
        variants: ["lg", "md", "sm"],
      },
    ],
  },

  theme: {
    extend: {
      fontFamily: {
        "theme-font": "var(--theme-font)",
        "nest-theme-font": "var(--nest-theme-font)",
        "minimog-theme-font": "var(--minimog-theme-font)",
        "leo-theme-font": "var(--leo-theme-font)",
        "lafaka-theme-font": "var(--lafaka-theme-font)",
        "electrox-theme-font": "var(--electrox-theme-font)",
        "cosmetica-theme-font": "var(--cosmetica-theme-font)",
        // Rubik: ["Rubik", "sans-serif"],
        // Inter: ["Inter", "sans-serif"],

        // Lato: ["Lato", "sans-serif"],
        // Raleway: ["Raleway", "sans-serif"],
        // Jost: ["Jost", "sans-serif"],
        // Poppins: ["Poppins", "sans-serif"],
        // Montserrat: ["Montserrat", "sans-serif"],
        // Dosis: ["Dosis", "sans-serif"],
        // Roboto: ["Roboto", "sans-serif"],
        // Source: ["Source Sans Pro", "sans-serif"],
      },
      colors: {
        "primary-color": "var(--primary-color)",
        "secondary-color": "var(--secondary-color)",

        // NEST THEME STYLE
        "nest-theme-title-color": "var(--nest-theme-title-color)",
        "nest-theme-price-color": "var(--nest-theme-price-color)",
        "nest-theme-mrp-color": "var(--nest-theme-mrp-color)",
        "nest-theme-border-color": "var(--nest-theme-border-color)",
        "nest-theme-button-title-border-color":
          "var(--nest-theme-button-title-color)",
        "nest-theme-button-bg-title--color":
          "var(--nest-theme-button-bg-title-color)",
        "nest-theme-button-bg-color": "var(--nest-theme-button-bg-color)",
        "nest-theme-default-price-color":
          "var(--nest-theme-default-price-color)",
        "nest-theme-default-title-color":
          "var(--nest-theme-default-title-color)",
        "nest-theme-cart-title-color": "var(--nest-theme-cart-title-color)",
        "nest-theme-cart-bg-color": "var(--nest-theme-cart-bg-color)",
        "nest-theme-category-color": "var(--nest-theme-category-color)",
        "nest-theme-ordersby-color": "var(--nest-theme-ordersby-color)",
        "nest-theme-tableheading-title-color":
          "var(--nest-theme-tableheading-title-color)",
        "nest-theme-shipping-title-color":
          "var(--nest-theme-shipping-title-color)",
        "nest-theme-checkout-bg-button-color":
          "var(--nest-theme-checkout-bg-button-color)",
        "nest-theme-button-default-bg-color":
          "var(--nest-theme-button-default-bg-color)",
        "nest-theme-qty-border-button-color":
          "var(--nest-theme-qty-border-button-color)",
        "nest-theme-menu-default-title-color":
          "var(--nest-theme-menu-default-title-color)",
        "nest-theme-menu-icon-color": "var(--nest-theme-menu-icon-color)",
        "nest-theme-allcate-bg-color": "var(--nest-theme-allcate-bg-color)",
        "nest-theme-allcate-title-color":
          "var(--nest-theme-allcate-title-color)",
        "nest-theme-menu-title-color": "var(--nest-theme-menu-title-color)",

        //MINIMOG THEME STYLE
        "minimog-theme-title-color": "var(--minimog-theme-title-color)",
        "minimog-theme-checkoutbtn-bg-color":
          "var(--minimog-theme-checkoutbtn-bg-color)",
        "minimog-theme-menu-icon-number-color":
          "var(--minimog-theme-menu-icon-number-color)",
        "minimog-theme-price-color": "var(--minimog-theme-price-color)",
        "minimog-theme-mrp-color": "var(--minimog-theme-mrp-color)",
        "minimog-theme-border-color": "var(--minimog-theme-border-color)",
        "minimog-theme-cartbutton-title-color":
          "var(--minimog-theme-cartbutton-title-color)",
        "minimog-theme-button-title-border-color":
          "var(--minimog-theme-button-title-color)",
        "minimog-theme-button-bg-title-color":
          "var(--minimog-theme-button-bg-title-color)",
        "minimog-theme-button-bg-color": "var(--minimog-theme-button-bg-color)",
        "minimog-theme-default-price-color":
          "var(--minimog-theme-default-price-color)",
        "minimog-theme-default-title-color":
          "var(--minimog-theme-default-title-color)",
        "minimog-theme-default-bg-color":
          "var(--minimog-theme-default-bg-color)",
        "minimog-theme-button-qty-text-color":
          "var(--minimog-theme-button-qty-text-color)",
        "minimog-theme-prgressbaractive-bg-color":
          "var(--minimog-theme-prgressbaractive-bg-color)",
        "minimog-theme-default-bg-hover-color":
          "var(--minimog-theme-default-bg-hover-color)",
        "minimog-theme-title-hover-color":
          "var(--minimog-theme-title-hover-color)",
        "minimog-theme-cartbutton-bg-color":
          "var(--minimog-theme-cartbutton-bg-color)",
        "minimog-theme-table-heading-title-color":
          "var(--minimog-theme-table-heading-title-color)",
        "minimog-theme-delete-button-color":
          "var(--minimog-theme-delete-button-color)",
        "minimog-theme-topbar-bg-color": "var(--minimog-theme-topbar-bg-color)",
        "minimog-theme-topbar-title-color":
          "var(--minimog-theme-topbar-title-color)",
        "minimog-theme-menu-title-color":
          "var(--minimog-theme-menu-title-color)",
        "minimog-theme-menu-icon-color": "var(--minimog-theme-menu-icon-color)",
        "minimog-theme-menu-icon-number-bg-color":
          "var(--minimog-theme-menu-icon-number-bg-color)",
        "minimog-theme-buynow-bg-color": "var(--minimog-theme-buynow-bg-color)",
        "minimog-theme-bottomline-color":
          "var(--minimog-theme-bottomline-color)",
        "minimog-theme-category-title": "var(--minimog-theme-category-title)",
        "minimog-theme-card-cartbutton-bg-color":
          "var(--minimog-theme-card-cartbutton-bg-color)",
        "minimog-theme-default-button-bg-color":
          "var(--minimog-theme-default-button-bg-color)",
        "minimog-theme-footer-title-color":
          "var(--minimog-theme-footer-title-color)",
        "minimog-theme-footer-title-default-color":
          "var(--minimog-theme-footer-title-default-color)",

        //LEO  THEME STYLE
        "leo-theme-title-color": "var(--leo-theme-title-color)",
        "leo-theme-size-title": "var(--leo-theme-size-title)",
        "leo-theme-size-default-title": "var(--leo-theme-size-default-title)",
        "leo-theme-price-default-color": "var(--leo-theme-price-default-color)",
        "leo-theme-qty-bg-color": "var(--leo-theme-qty-bg-color)",
        "leo-theme-qty-title-color": "var(--leo-theme-qty-title-color)",
        "leo-theme-default-shipetc-color":
          "var(--leo-theme-default-shipetc-color)",
        "leo-theme-heading-cart-color": "var(--leo-theme-heading-cart-color)",
        "leo-theme-price-color": "var(--leo-theme-price-color)",
        "leo-theme-border-color": "var(--leo-theme-border-color)",
        "leo-theme-button-title-border-color":
          "var(--leo-theme-button-title-color)",
        "leo-theme-button-bg-title--color":
          "var(--leo-theme-button-bg-title-color)",
        "leo-theme-button-bg-color": "var(--leo-theme-button-bg-color)",
        "leo-theme-default-price-color": "var(--leo-theme-default-price-color)",
        "leo-theme-default-title-color": "var(--leo-theme-default-title-color)",
        "leo-theme-default-bg-color": "var(--leo-theme-default-bg-color)",
        "leo-theme-button-qty-text-color":
          "var(--leo-theme-button-qty-text-color)",
        "leo-theme-prgressbaractive-bg-color":
          "var(--leo-theme-prgressbaractive-bg-color)",
        "leo-theme-cartbutton-bg-color": "var(--leo-theme-cartbutton-bg-color)",
        "leo-theme-checkoutbtn-bg-color":
          "var(--leo-theme-checkoutbtn-bg-color)",
        "leo-theme-wishlist-bg-color": "var(--leo-theme-wishlist-bg-color)",
        "leo-theme-wishlist-bg-hover-color":
          "var( --leo-theme-wishlist-bg-hover-color)",
        "leo-theme-wishlist-bg-hover-color":
          "var(--leo-theme-wishlist-bg-hover-color)",
        "leo-theme-menu-color": "var(--leo-theme-menu-color)",
        "leo-theme-topmenu-title-color": "var(--leo-theme-topmenu-title-color)",
        "leo-theme-menu-icon-color": "var(--leo-theme-menu-icon-color)",
        "leo-theme-icon-number-color": "var(--leo-theme-icon-number-color)",
        "leo-theme-icon-number-text-color":
          "var(--leo-theme-icon-number-text-color)",

        //LAFAKA  THEME STYLE
        "lafaka-theme-title-color": "var(--lafaka-theme-title-color)",
        "lafaka-theme-address-bg-color": "var(--lafaka-theme-address-bg-color)",
        "lafaka-theme-heading-underline-color":
          "var(--lafaka-theme-heading-underline-color)",
        "lafaka-theme-heading-title-color":
          "var(--lafaka-theme-heading-title-color)",
        "lafaka-theme-border-b-color": "var(--lafaka-theme-border-b-color)",
        "lafaka-theme-wishlist-icon-color":
          "var(--lafaka-theme-wishlist-icon-color)",
        "lafaka-theme-extra-color": "var(--lafaka-theme-extra-color)",
        "lafaka-theme-order-button-bg-color":
          "var(--lafaka-theme-order-button-bg-color)",
        "lafaka-theme-option-color": "var(--lafaka-theme-option-color)",
        "lafaka-theme-price-color": "var(--lafaka-theme-price-color)",
        "lafaka-theme-cartbutton-title-color":
          "var(--lafaka-theme-cartbutton-title-color)",
        "lafaka-theme-border-color": "var(--lafaka-theme-border-color)",
        "lafaka-theme-button-title-color":
          "var(--lafaka-theme-button-title-color)",
        "lafaka-theme-button-title-border-color":
          "var(--lafaka-theme-button-title-border-color)",
        "lafaka-theme-button-bg-title-color":
          "var(--lafaka-theme-button-bg-title-color)",
        "lafaka-theme-button-bg-color": "var(--lafaka-theme-button-bg-color)",
        "lafaka-theme-default-price-color":
          "var(--lafaka-theme-default-price-color)",
        "lafaka-theme-default-title-color":
          "var(--lafaka-theme-default-title-color)",
        "lafaka-theme-default-bg-color": "var(--lafaka-theme-default-bg-color)",
        "lafaka-theme-button-qty-text-color":
          "var(--lafaka-theme-button-qty-text-color)",
        "lafaka-theme-prgressbaractive-bg-color":
          "var(--lafaka-theme-prgressbaractive-bg-color)",
        "lafaka-theme-cartbutton-bg-color":
          "var(--lafaka-theme-cartbutton-bg-color)",
        "lafaka-theme-checkoutbtn-bg-color":
          "var(--lafaka-theme-checkoutbtn-bg-color)",
        "lafaka-theme-icon-color": "var(--lafaka-theme-icon-color)",
        "lafaka-theme-edit-icon-color": "var( --lafaka-theme-edit-icon-color)",
        "lafaka-theme-edit-icon-bg-color":
          "var( --lafaka-theme-edit-icon-bg-color)",
        "lafaka-theme-price-bg-color": "var( --lafaka-theme-price-bg-color)",
        "lafaka-theme-wishlist-icon-bg-color":
          "var( --lafaka-theme-wishlist-icon-bg-color)",
        "lafaka-theme-description-color":
          "var(--lafaka-theme-description-color)",
        "lafaka-theme-review-color": "var( --lafaka-theme-review-color)",

        //ELECTROX  THEME STYLE
        "electrox-theme-title-color": "var(--electrox-theme-title-color)",
        "electrox-theme-buynow-title-color":
          "var(--electrox-theme-buynow-title-color)",
        "electrox-theme-buynow-bg-color":
          "var(--electrox-theme-buynow-bg-color)",
        "electrox-theme-price-color": "var(--electrox-theme-price-color)",
        "electrox-theme-border-color": "var(--electrox-theme-border-color)",
        "electrox-theme-button-title-border-color":
          "var(--electrox-theme-button-title-color)",
        "electrox-theme-button-bg-title--color":
          "var(--electrox-theme-button-bg-title-color)",
        "electrox-theme-button-bg-color":
          "var(--electrox-theme-button-bg-color)",
        "electrox-theme-default-price-color":
          "var(--electrox-theme-default-price-color)",
        "electrox-theme-default-title-color":
          "var(--electrox-theme-default-title-color)",
        "electrox-theme-default-bg-color":
          "var(--electrox-theme-default-bg-color)",
        "electrox-theme-button-qty-text-color":
          "var(--electrox-theme-button-qty-text-color)",
        "electrox-theme-prgressbaractive-bg-color":
          "var(--electrox-theme-prgressbaractive-bg-color)",
        "electrox-theme-cartbutton-bg-color":
          "var(--electrox-theme-cartbutton-bg-color)",
        "electrox-theme-checkoutbtn-bg-color":
          "var(--electrox-theme-checkoutbtn-bg-color)",
        "electrox-theme-icon-color": "var(--electrox-theme-icon-color)",
        "electrox-theme-edit-icon-color":
          "var( --electrox-theme-edit-icon-color)",
        "electrox-theme-edit-icon-bg-color":
          "var( --electrox-theme-edit-icon-bg-color)",
        "electrox-theme-cart-title-color":
          "var( --electrox-theme-cart-title-color)",
        "electrox-theme-totla-price-color":
          "var(  --electrox-theme-totla-price-color)",
        "electrox-theme-headerdefault-bg-color":
          "var( --electrox-theme-headerdefault-bg-color)",
        "electrox-theme-cart-border-color":
          "var( --electrox-theme-cart-border-color)",
        "electrox-theme-category-color":
          "var( --electrox-theme-category-color)",
        "electrox-theme-mrp-color": "var( --electrox-theme-mrp-color)",
        "electrox-theme-wishlist-text-color":
          "var( --electrox-theme-wishlist-text-color)",
        "electrox-theme-offer-text-color":
          "var(  --electrox-theme-offer-text-color)",
        "electrox-theme-offer-bg-color":
          "var(  --electrox-theme-offer-bg-color)",
        "electrox-theme-table-header-title-color":
          "var(  --electrox-theme-table-header-title-color)",
        "electrox-theme-clear-bg-color":
          "var(  --electrox-theme-clear-bg-color)",
        "electrox-theme-checkoutbtn-title-color":
          "var(  --electrox-theme-checkoutbtn-title-color)",
        "electrox-theme-default-menu-title-color":
          "var(  --electrox-theme-default-menu-title-color)",
        "electrox-theme-search-title-color":
          "var(  --electrox-theme-search-title-color)",
        "electrox-theme-search-bg-color":
          "var(  --electrox-theme-search-bg-color)",
        "electrox-theme-input-title-color":
          "var(  --electrox-theme-input-title-color)",
        "electrox-theme-input-border-color":
          "var(  --electrox-theme-input-border-color)",
        "electrox-theme-count-number-title-color":
          "var(  --electrox-theme-count-number-title-color)",
        "electrox-theme-default-icon-color":
          "var(  --electrox-theme-default-icon-color)",
        "electrox-theme-default-icondeliverytime-color":
          "var(  --electrox-theme-default-icondeliverytime-color)",
        "electrox-theme-stockitem-color":
          "var(  --electrox-theme-stockitem-color)",

        //cosmetica  THEME STYLE
        "cosmetica-theme-title-color": "var(--cosmetica-theme-title-color)",
        "cosmetica-theme-price-color": "var(--cosmetica-theme-price-color)",
        "cosmetica-theme-border-color": "var(--cosmetica-theme-border-color)",
        "cosmetica-theme-button-title-border-color":
          "var(--cosmetica-theme-button-title-color)",
        "cosmetica-theme-button-bg-title--color":
          "var(--cosmetica-theme-button-bg-title-color)",
        "cosmetica-theme-button-bg-color":
          "var(--cosmetica-theme-button-bg-color)",
        "cosmetica-theme-default-price-color":
          "var(--cosmetica-theme-default-price-color)",
        "cosmetica-theme-default-title-color":
          "var(--cosmetica-theme-default-title-color)",
        "cosmetica-theme-default-bg-color":
          "var(--cosmetica-theme-default-bg-color)",
        "cosmetica-theme-button-qty-text-color":
          "var(--cosmetica-theme-button-qty-text-color)",
        "cosmetica-theme-prgressbaractive-bg-color":
          "var(--cosmetica-theme-prgressbaractive-bg-color)",
        "cosmetica-theme-cartbutton-bg-color":
          "var(--cosmetica-theme-cartbutton-bg-color)",
        "cosmetica-theme-checkoutbtn-bg-color":
          "var(--cosmetica-theme-checkoutbtn-bg-color)",
        "cosmetica-theme-icon-color": "var(--cosmetica-theme-icon-color)",
        "cosmetica-theme-edit-icon-color":
          "var( --cosmetica-theme-edit-icon-color)",
        "cosmetica-theme-edit-icon-bg-color":
          "var( --cosmetica-theme-edit-icon-bg-color)",
        "cosmetica-theme-cart-title-color":
          "var( --cosmetica-theme-cart-title-color)",
        "cosmetica-theme-totla-price-color":
          "var(  --cosmetica-theme-totla-price-color)",
        "cosmetica-theme-headerdefault-bg-color":
          "var( --cosmetica-theme-headerdefault-bg-color)",
        "cosmetica-theme-cart-border-color":
          "var( --cosmetica-theme-cart-border-color)",
        "cosmetica-theme-mrp-color": "var( --cosmetica-theme-mrp-color)",
        "cosmetica-theme-icon-fover-color":
          "var(--cosmetica-theme-icon-fover-color)",
        "cosmetica-theme-icon-hover-title-color":
          "var(--cosmetica-theme-icon-hover-title-color)",
        "cosmetica-theme-icon-bg-title-color":
          "var(--cosmetica-theme-icon-bg-title-color)",
        "cosmetica-theme-cart-bg-color": "var(--cosmetica-theme-cart-bg-color)",
        "cosmetica-theme-table-title-color":
          "var(--cosmetica-theme-table-title-color)",
        "cosmetica-theme-navbar-default-title-color":
          "var(--cosmetica-theme-navbar-default-title-color)",
        "cosmetica-theme-navbar-default-icon-color":
          "var(--cosmetica-theme-navbar-default-icon-color)",
        "cosmetica-theme-count-number-bg-color":
          "var(--cosmetica-theme-count-number-bg-color)",
        "cosmetica-theme-count-number-title-color":
          "var(--cosmetica-theme-count-number-title-color)",
        "cosmetica-theme-search-title-color":
          "var(--cosmetica-theme-search-title-color)",
        "cosmetica-theme-search-bg-color":
          "var(--cosmetica-theme-search-bg-color)",
        "cosmetica-theme-input-border-color":
          "var(--cosmetica-theme-input-border-color)",
        "cosmetica-theme-input-title-color":
          "var(--cosmetica-theme-input-title-color)",
        "cosmetica-theme-input-title-color":
          "var(--cosmetica-theme-input-title-color)",
      },
      // cursor: {
      //   fancy:
      //     "url(https://thumbs.dreamstime.com/b/close-button-vector-icon-close-button-symbol-delete-cross-circle-close-button-vector-icon-close-button-symbol-delete-cross-139159801.jpgZ)",
      // },
    },
  },
  plugins: [require("tailwind-scrollbar")],
  variants: {
    scrollbar: ["dark"],
  },
};
