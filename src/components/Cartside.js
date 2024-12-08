import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "./Cartside.css";

import { IoMdArrowForward } from "react-icons/io";
import { FiTrash2 } from "react-icons/fi";

import CartItem from "./CartItem";
import { SidebarContext } from "../contexts/SidebarContext";
import { CartContext } from "../contexts/CartContext";

const Cartside = () => {
  const { handleClose } = useContext(SidebarContext);
  const { cart, clearCart, itemAmount, total } = useContext(CartContext);
  return (
    <section className="containercart">
      <div
        className={ "right-0 -right-full "}
      >
        <div className=" flex items-center justify-between py-6 border-b">
          <div className="uppercase text-sm font-semibold">
            Shopping Bag ({itemAmount})
          </div>
          <div
            onClick={handleClose}
            className=" close cursor-poniter w-8 h-8 flex justify-center items-center"
          >
            <IoMdArrowForward className="text-2xl" />
          </div>
        </div>
        <div className="imagecart flex flex-col gap-y-2 h-[360px] md:h-[480px] lg:h-[420px] overflow-y-auto overflow-x-hidden border-b">
          {cart.map((item) => {
            return <CartItem item={item} key={item.id} />;
          })}
        </div>
        <div className="flex flex-col gap-y-3  mt-4">
          <div className="flex w-full justify-between items-center">
            {/* total */}
            <div className="font-semibold">
              <span className="mr-2">Subtotal:</span> ${" "}
              {parseFloat(total).toFixed(2)}
            </div>
            {/* clear cart icon */}
            <div
              onClick={clearCart}
              className="cursor-pointer py-4 bg-red-500 text-white w-12 h-12 flex justify-center items-center text-xl"
            >
              <FiTrash2 />
            </div>
          </div>
          <Link
            to={"/"}
            className=" btn_3 button-contactForm flex p-3 justify-center items-center w-full font-medium"
          >
            View Cart
          </Link>
          <Link
            to={"/"}
            className="btn_3 button-contactForm flex p-3 justify-center items-center text-white w-full font-medium"
          >
            Checkout
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Cartside;
