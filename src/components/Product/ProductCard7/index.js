import React from "react";
import "./style.scss";
import PropTypes from "prop-types";
function Ch(props) {
  return (
    <>
      <div>hello {props.children}</div>
    </>
  );
}
export default function Productcard7({
  product,
  titleColor,
  productMrp,
  productStoreprice,
  categoryCOlor,
  variantColor,
}) {
  return (
    <div className="container grid grid-cols-2 md:grid-cols-4 px-9 gap-4">
      <div className="  row group shadow-md">
        <div className="image relative">
          <img src={product.produtImage} alt="" />
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
        <div className="  group-hover:hidden content px-5 py-3">
          <h3 className="font-sans font-semibold">{product.productCategory}</h3>
          <p className="truncate mt-2">{product.productName}</p>
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

      <Ch>
        <p className=" text-cyan-400">he</p>
      </Ch>
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
