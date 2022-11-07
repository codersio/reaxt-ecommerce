import React from "react";
// import "./style.scss";
import "../../scss/global.scss";
import ProductPage4 from "../Product/ProductcartPage4";
export default function ProductFixedgrid({
  products,
  Desktopgrid,
  MobileGrid,
  padding,
  margin,
  marginBottom,
  marginLeft,
  marginTop,
  marginRight,
  border,
}) {
  return (
    <>
      {Desktopgrid > 7 || MobileGrid > 3 ? (
        <div className="container grid grid-cols-2 md:grid-cols-2">
          <ProductPage4
            border={border}
            margin={margin}
            marginBottom={marginBottom}
            marginLeft={marginLeft}
            marginTop={marginTop}
            marginRight={marginRight}
            products={products}
            padding={padding}
          ></ProductPage4>
        </div>
      ) : (
        <div
          className={`px-5   container  grid grid-cols-${MobileGrid} md:grid-cols-${Desktopgrid} gap-3`}
        >
          <ProductPage4
            border={border}
            margin={margin}
            marginBottom={marginBottom}
            marginLeft={marginLeft}
            marginTop={marginTop}
            marginRight={marginRight}
            products={products}
            padding={padding}
          ></ProductPage4>
        </div>
      )}
    </>
  );
}
