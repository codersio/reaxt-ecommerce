import React from "react";
import "./style.scss";
import PropTypes from "prop-types";
export default function Productcard8({
  product,
  titleColor,
  productMrp,
  productStoreprice,
  categoryCOlor,
  variantColor,
}) {
  return (
    <div className="container grid grid-cols-2 md:grid-cols-4 px-9 gap-4">
      <div className="  row   shadow-md ">
        <div className="image ">
          <img
            className=" w-48 block m-auto"
            src={product.produtImage}
            alt=""
          />
          <div className="px-5 py-3 absolute bottom-0 w-full hidden  group-hover:block bg-white ">
            <button className="w-full border-2 font-sans">Add to cart</button>
            <div className="size-part truncate mt-2 font-sans">
              {product.variantName}:
              {product.variants.map((i) => (
                <span className="ml-2">
                  {i.size}

                  {","}
                </span>
              ))}
            </div>

            <div className="price-content flex space-x-2 mt-2 text-sm ">
              <h3 className="row font-sans font-semibold">
                ${product.productMrp}
              </h3>
              <h3 className="row font-sans text-slate-200 font-semibold">
                <s>${product.productStoreprice}</s>{" "}
                <span className="text-orange-500">(OFF 60%)</span>
              </h3>
            </div>
          </div>
        </div>
        <div className=" content px-5 py-3">
          <h3 className="font-sans font-semibold">{product.productCategory}</h3>
          <p className="truncate mt-2">{product.productName}</p>
          <div className="price-content flex space-x-2 mt-2 text-sm ">
            <h3 className="row font-sans font-semibold">
              ${product.productMrp}
            </h3>
            <h3 className="row font-sans text-slate-200 font-semibold">
              <s>${product.productStoreprice}</s>{" "}
              <span className="text-green-400">(OFF 60%)</span>
            </h3>
          </div>

          <div className="b-row flex space-x-2 mt-2">
            <div className="row w-full">
              <select name="" id="" className="w-full border-2 p-2">
                {product.variants.map((i) => (
                  <option value="">
                    {i.weight}
                    {""} {product.unit}
                  </option>
                ))}
              </select>
            </div>
            <div className="row ">
              <div className="bg-slate-200 w-12 p-1 text-center text-3xl text-yellow-600 ">
                +
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Productcard7.propType = {
//   arrayWithShape: PropTypes.arrayOf(
//     PropTypes.shape({
//       productName: PropTypes.string.isRequired,
//       fontSize: PropTypes.number.isRequired,
//     })
//   ).isRequired,
// };
// Productcard7.propTypes = {

//   product: PropTypes.arrayOf(
//     PropTypes.shape({
//       productName: PropTypes.string,
//       // id: PropTypes.number,
//     })
//   ),
// };
