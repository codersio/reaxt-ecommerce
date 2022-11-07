import React from "react";
import "./style.scss";
import ProductPage4 from "../Product/ProductcartPage4";
import ScrollContainer from "react-indiana-drag-scroll";
export default function ProductScroll({ product }) {
  return (
    <>
      <ScrollContainer horizontal={true} className=" space-x-4 container flex ">
        <ProductPage4>{product}</ProductPage4>
      </ScrollContainer>
    </>
  );
}
