import React, { useState } from "react";
import {
  faPen,
  faPencil,
  faStar,
  faAngleUp,
  faAngleDown,
  faTrash,
  faTicket,
  faTractor,
  faClock,
  faTruckFast,
  faUser,
  faCreditCard,
  faShareFromSquare,
} from "@fortawesome/free-solid-svg-icons";
import "./style.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export default function Electrox() {
  const [hidebt, setShowbt] = useState(false);
  const [addresss, setAddress] = useState(false);
  const Addressset = () => {
    setAddress(!addresss);
  };
  const Handlebtn = () => {
    setShowbt(!hidebt);
  };
  return (
    <div className=" font-Quicksand p-2 md:flex md:space-x-9">
      <div className="row w-full md:w-[65%] space-y-4">
        <div className="md:flex md:space-x-2 md:space-y-0 space-y-2">
          <h3
            className=" space-x-2 text-[#7E7E7E] text-[14px] md:text-[17px]
             leading-3  md:w-[50%] 
        shadow-md border rounded-md p-4"
          >
            <span>
              <FontAwesomeIcon
                className=" texxt-[12px] md:text-[14px]"
                icon={faUser}
              />
            </span>
            <span>Already have an account?</span>
            <a
              href=""
              className="text-[#3bb77e] font-[500] text-[14px] md:text-[16px]"
            >
              Click here to login
            </a>
          </h3>
          <div className="coupon w-full md:w-[50%] flex">
            <div className="border-[#ececec] text-[#838383] rounded-lg border flex">
              <FontAwesomeIcon icon={faCreditCard} className="mt-3 p-1" />{" "}
              <input
                type="text"
                name=""
                className="w-full border-none"
                placeholder="Enter coupon code"
                id=""
              />
            </div>
            <input
              type="button"
              className="bg-[#253d4e]  text-[14px] w-[45%] md:w-[35%] font-[500] rounded-r-lg text-white"
              value="Apply Coupon"
            />
          </div>
        </div>
        <h3 className="  text-[24px] font-[800] text-[#253d4e]">
          Billing Details
        </h3>
        <div className="for1 space-y-4">
          <div className="form-cls md:flex md:space-y-0 space-y-2 md:space-x-3 ">
            <div className="item w-[100%] space-y-3">
              <input
                type="text"
                name=""
                placeholder="first name"
                className="w-[100%]  border border-[#ececec] text-[#838383] font-[500] text-[16px]  rounded-md p-4"
                id=""
              />
            </div>
            <div className="item w-[100%] space-y-3">
              <input
                type="text"
                name=""
                placeholder="Last name"
                className="w-[100%]  border border-[#ececec] text-[#838383] font-[500] text-[16px]  rounded-md p-4"
                id=""
              />
            </div>
          </div>

          <div className="form-cls md:flex md:space-y-0 space-y-2 md:space-x-3 ">
            <div className="item w-[100%] space-y-3">
              <input
                type="text"
                name=""
                placeholder="Address *"
                className="w-[100%]  border border-[#ececec] text-[#838383] font-[500] text-[16px]  rounded-md p-4"
                id=""
              />
            </div>
            <div className="item w-[100%] space-y-3">
              <input
                type="text"
                name=""
                placeholder="Address Line 2 *"
                className="w-[100%]  border border-[#ececec] text-[#838383] font-[500] text-[16px]  rounded-md p-4"
                id=""
              />
            </div>
          </div>
          <div className="form-cls md:flex md:space-y-0 space-y-2 md:space-x-3 ">
            <div className="item w-[100%] space-y-3">
              <select
                name=""
                id=""
                className="w-[100%] text-[#253d4e]  border border-[#ececec]  font-[800] text-[16px]  rounded-md p-4"
              >
                <option value="" selected>
                  Select an option
                </option>
              </select>
            </div>
            <div className="item w-[100%] space-y-3">
              <input
                type="text"
                name=""
                placeholder="City / Town *"
                className="w-[100%]  border border-[#ececec] text-[#838383] font-[500] text-[16px]  rounded-md p-4"
                id=""
              />
            </div>
          </div>
          <div className="form-cls md:flex md:space-y-0 space-y-2 md:space-x-3 ">
            <div className="item w-[100%] space-y-3">
              <input
                type="text"
                name=""
                placeholder="Postcode / ZIP *"
                className="w-[100%]  border border-[#ececec] text-[#838383] font-[500] text-[16px]  rounded-md p-4"
                id=""
              />
            </div>
            <div className="item w-[100%] space-y-3">
              <input
                type="text"
                name=""
                placeholder="Phone *"
                className="w-[100%]  border border-[#ececec] text-[#838383] font-[500] text-[16px]  rounded-md p-4"
                id=""
              />
            </div>
          </div>

          <div className="form-cls md:flex md:space-y-0 space-y-2 md:space-x-3 ">
            <div className="item w-[100%] space-y-3">
              <input
                type="text"
                name=""
                placeholder="Company Name"
                className="w-[100%]  border border-[#ececec] text-[#838383] font-[500] text-[16px]  rounded-md p-4"
                id=""
              />
            </div>
            <div className="item w-[100%] space-y-3">
              <input
                type="text"
                name=""
                placeholder="Email Address *"
                className="w-[100%]  border border-[#ececec] text-[#838383] font-[500] text-[16px]  rounded-md p-4"
                id=""
              />
            </div>
          </div>
          <textarea
            name=""
            id=""
            className="w-[100%]  border border-[#ececec] text-[#838383] font-[300] text-[16px]  rounded-md "
            cols="30"
            rows="10"
          >
            {" "}
          </textarea>
        </div>
        <div className="cracc">
          <input type="checkbox" onClick={Handlebtn} name="" id="" />{" "}
          <label htmlFor="" className="mt-1">
            Create Account?
          </label>
        </div>
        <div className={hidebt ? "for1 space-y-4 block" : "hidden"}>
          <div className="form-cls flex space-x-3 ">
            <div className="item w-[100%] space-y-3">
              <label htmlFor="">password *</label> <br />
              <input
                type="text"
                name=""
                placeholder="first name"
                className="w-[50%]  rounded-md p-"
                id=""
              />
            </div>
          </div>
        </div>
        <div className="cl">
          <input type="checkbox" onClick={Addressset} name="" id="" />{" "}
          <label htmlFor="" className="mt-1">
            Ship to a different address?
          </label>
        </div>
        <div className={addresss ? "acc for1 space-y-4 block" : "hidden"}>
          <div className="for1 space-y-4">
            <div className="form-cls md:flex md:space-y-0 space-y-2 md:space-x-3 ">
              <div className="item w-[100%] space-y-3">
                <input
                  type="text"
                  name=""
                  placeholder="first name"
                  className="w-[100%]  border  rounded-md p-4"
                  id=""
                />
              </div>
              <div className="item w-[100%] space-y-3">
                <input
                  type="text"
                  name=""
                  placeholder="Last name"
                  className="w-[100%]  border  rounded-md p-4"
                  id=""
                />
              </div>
            </div>

            <div className="form-cls md:flex md:space-y-0 space-y-2 md:space-x-3 ">
              <div className="item w-[100%] space-y-3">
                <input
                  type="text"
                  name=""
                  placeholder="Address *"
                  className="w-[100%]  border  rounded-md p-4"
                  id=""
                />
              </div>
              <div className="item w-[100%] space-y-3">
                <input
                  type="text"
                  name=""
                  placeholder="Address Line 2 *"
                  className="w-[100%]  border  rounded-md p-4"
                  id=""
                />
              </div>
            </div>
            <div className="form-cls md:flex md:space-y-0 space-y-2 md:space-x-3 ">
              <div className="item w-[100%] space-y-3">
                <select
                  name=""
                  id=""
                  className="w-[100%] text-[#253d4e]  border  rounded-md p-4"
                >
                  <option value="" selected>
                    Select an option
                  </option>
                </select>
              </div>
              <div className="item w-[100%] space-y-3">
                <input
                  type="text"
                  name=""
                  placeholder="City / Town *"
                  className="w-[100%]  border  rounded-md p-4"
                  id=""
                />
              </div>
            </div>
            <div className="form-cls md:flex md:space-y-0 space-y-2 md:space-x-3 ">
              <div className="item w-[100%] space-y-3">
                <input
                  type="text"
                  name=""
                  placeholder="Postcode / ZIP *"
                  className="w-[100%]  border  rounded-md p-4"
                  id=""
                />
              </div>
              <div className="item w-[100%] space-y-3">
                <input
                  type="text"
                  name=""
                  placeholder="Phone *"
                  className="w-[100%]  border  rounded-md p-4"
                  id=""
                />
              </div>
            </div>

            <div className="form-cls md:flex md:space-y-0 space-y-2 md:space-x-3 ">
              <div className="item w-[100%] space-y-3">
                <input
                  type="text"
                  name=""
                  placeholder="Company Name"
                  className="w-[100%]  border  rounded-md p-4"
                  id=""
                />
              </div>
              <div className="item w-[100%] space-y-3">
                <input
                  type="text"
                  name=""
                  placeholder="Email Address *"
                  className="w-[100%]  border  rounded-md p-4"
                  id=""
                />
              </div>
            </div>
            <textarea
              name=""
              id=""
              className="w-[100%]  border  rounded-md "
              cols="30"
              rows="10"
            >
              {" "}
            </textarea>
          </div>
        </div>
      </div>

      <div className="row w-full md:w-[34%]   space-y-6 md:mt-0 mt-5">
        <div className="pp border p-5 rounded-xl shadow-md">
          <div className="utem text-[14px] border md:flex md:space-x-3 p-2 text-[#666]">
            <table class=" md:inline-table hidden border-collapse table-auto w-full text-sm">
              <thead className=" p-2">
                <tr>
                  <th class="border-b  font-[700]  p-6    text-[#253d4e] text-[24px] text-left">
                    Your Order
                  </th>

                  <th class="border-b text-[16px] font-semibold   p-6    text-[#b6b6b6]  ">
                    <h3 className="ml-8">Subtotal</h3>
                  </th>
                </tr>
              </thead>
              <tbody class="bg-white dark:bg-slate-800">
                <tr>
                  <td class="border-b flex space-x-5 border-slate-100 dark:border-slate-700 p-4  text-slate-500 dark:text-slate-500">
                    <div className="item border rounded-lg w-[55%] m-auto">
                      <img
                        className=" rounded-2xl"
                        src="https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/product-1-1.jpg"
                        alt=""
                      />
                    </div>
                    <div className="item grid place-items-center w-full">
                      <div className="div space-y-1 ">
                        <h3 className="text-[16px] text-[#333e48] font-semibold ">
                          Faxtex Product Sample
                        </h3>
                        <div className="star  flex space-x-3 ">
                          <div className="text-[0.8rem] space-x-1 text-[#fdc040]">
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStar} />
                          </div>
                          <div className="rive text-slate-300">4.40</div>
                        </div>
                      </div>
                    </div>
                  </td>
                  <td class="border-b border-slate-100 dark:border-slate-700 p-4 text-slate-500 dark:text-slate-500">
                    <h3 className="flex space-x-6 font-[Quicksand,sans-serif] font-[800]  text-[24px] text-[#3bb77e]">
                      <span className="text-[16px] text-[#b6b6b6]">x1</span>{" "}
                      <span>$13.3</span>
                    </h3>
                  </td>
                </tr>
              </tbody>
            </table>

            <div className="tem md:hidden block">
              <img
                className="w-[100%] rounded-xl"
                src="https://demo1.leotheme.com/leo_wooden_demo/286-cart_default/blouse.jpg"
                alt=""
              />
            </div>
            <div className="item space-y-2 md:hidden block mt-5">
              <h3 className="text-[16px] text-[#253d4e] font-semibold text-center">
                Faxtex Product Sample
              </h3>
              <div className="star  flex space-x-3 text-center  justify-center">
                <div className="text-[0.8rem] space-x-1 text-yellow-500">
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                </div>
                <div className="rive text-slate-300">(32 reviews)</div>
              </div>
            </div>
            <div className="price text-center ">
              <h3 className=" text-[#3bb77e] text-left font-[500] text-[24px] md:hidden block">
                $14.00
              </h3>
            </div>
          </div>
        </div>

        <div className="font-Lato space-y-4">
          <h3 className="text-[24px] text-[#253d4e] font-[700]">Payment</h3>
          <div className="bnk text-[#292b2c] text-[14px] font-[500]">
            <input type="radio" name="" id="" />{" "}
            <label htmlFor="">Direct Bank Transfer</label>
          </div>
          <div className="bnk text-[#292b2c] text-[14px] font-[500]">
            <input type="radio" name="" id="" />{" "}
            <label htmlFor="">Cash on delivery</label>
          </div>
          <div className="bnk text-[#292b2c] text-[14px] font-[500]">
            <input type="radio" name="" id="" />{" "}
            <label htmlFor="">Online Getway</label>
          </div>
        </div>

        <div className="cash flex space-x-2">
          <img
            src="https://wp.alithemes.com/html/nest/demo/assets/imgs/theme/icons/payment-paypal.svg"
            alt=""
          />
          <img
            src="https://wp.alithemes.com/html/nest/demo/assets/imgs/theme/icons/payment-visa.svg"
            alt=""
          />
          <img
            src="https://wp.alithemes.com/html/nest/demo/assets/imgs/theme/icons/payment-zapper.svg"
            alt=""
          />
          <img
            src="https://wp.alithemes.com/html/nest/demo/assets/imgs/theme/icons/payment-master.svg"
            alt=""
          />
        </div>
        <div className="button block space-x-2 text-center m-0 w-[50%] bg-[#3bb77e] text-white font-[500]  p-3 rounded-sm capitalize ">
          <input type="button" value="Place an order" className=" " />
          <FontAwesomeIcon icon={faShareFromSquare} />
        </div>
      </div>
    </div>
  );
}
