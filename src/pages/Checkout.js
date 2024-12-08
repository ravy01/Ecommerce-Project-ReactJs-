import React, { useContext } from "react";
import { Link } from "react-router-dom";
import CartItem from "../components/CartItem";
import { CartContext } from "../contexts/CartContext";
import { FiTrash2 } from "react-icons/fi";
// import Swal from "sweetalert2";

const Checkout = () => {
  const { cart, clearCart, total } = useContext(CartContext);

  // const handleCheckout = () => {
  //   Swal.fire({
  //     title: "Checkout done!",
  //     icon: "success"
  //   });
  // };
  return (
    <div>
      <>
        <section className="breadcrumb breadcrumb_bg">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-8">
                <div className="breadcrumb_iner">
                  <div className="breadcrumb_iner_item">
                    <h2>Product Checkout</h2>
                    <p>
                      Home <span>-</span> Shop Single
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* breadcrumb start*/}
        {/*================Checkout Area =================*/}
        <section className="checkout_area padding_top">
          <div className="container">
            <div className="returning_customer">
              <div className="check_title">
                <h2>
                  Returning Customer?
                  <Link to="/">Click here to login</Link>
                </h2>
              </div>
              <p>
                If you have shopped with us before, please enter your details in
                the boxes below. If you are a new customer, please proceed to
                the Billing &amp; Shipping section.
              </p>
              <form
                className="row contact_form"
                action="#"
                method="post"
                noValidate="novalidate"
              >
                <div className="col-md-6 form-group p_star">
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    name="name"
                    defaultValue=" "
                  />
                  <span
                    className="placeholder bg-light"
                    data-placeholder="Username or Email"
                  />
                </div>
                <div className="col-md-6 form-group p_star">
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    name="password"
                    defaultValue=""
                  />
                  <span className="placeholder bg-light" data-placeholder="Password" />
                </div>
                <div className="col-md-12 form-group">
                  <Link className="btn_3 button-contactForm">
                    log in
                  </Link>
                  <div className="creat_account">
                    <input type="checkbox" id="f-option" name="selector" />
                    <label htmlFor="f-option">Remember me</label>
                  </div>
                  <Link to="/" className="lost_pass" href="#">
                    Lost your password?
                  </Link>
                </div>
              </form>
            </div>
            <div className="cupon_area">
              <div className="check_title">
                <h2>
                  Have a coupon?
                  <Link to="/">Click here to enter your code</Link>
                </h2>
              </div>
              <input type="text" placeholder="Enter coupon code" />
              <Link to="/" className="tp_btn" href="#">
                Apply Coupon
              </Link>
            </div>
            <div className="billing_details">
              <div className="row">
                <div className="col-lg-8">
                  <h3>Billing Details</h3>
                  <form
                    className="row contact_form"
                    action="#"
                    method="post"
                    noValidate="novalidate"
                  >
                    <div className="col-md-6 form-group p_star">
                      <input
                        type="text"
                        className="form-control"
                        id="first"
                        name="name"
                      />
                      <span
                        className="placeholder bg-light"
                        data-placeholder="First name"
                      />
                    </div>
                    <div className="col-md-6 form-group p_star">
                      <input
                        type="text"
                        className="form-control"
                        id="last"
                        name="name"
                      />
                      <span
                        className="placeholder bg-light"
                        data-placeholder="Last name"
                      />
                    </div>
                    <div className="col-md-12 form-group">
                      <input
                        type="text"
                        className="form-control"
                        id="company"
                        name="company"
                        placeholder="Company name"
                      />
                    </div>
                    <div className="col-md-6 form-group p_star">
                      <input
                        type="text"
                        className="form-control"
                        id="number"
                        name="number"
                      />
                      <span
                        className="placeholder bg-light"
                        data-placeholder="Phone number"
                      />
                    </div>
                    <div className="col-md-6 form-group p_star">
                      <input
                        type="text"
                        className="form-control"
                        id="email"
                        name="compemailany"
                      />
                      <span
                        className="placeholder bg-light"
                        data-placeholder="Email Address"
                      />
                    </div>
                    <div className="col-md-12 form-group p_star">
                      <select className="country_select">
                        <option value={1}>Country</option>
                        <option value={2}>Country</option>
                        <option value={4}>Country</option>
                      </select>
                    </div>
                    <div className="col-md-12 form-group p_star">
                      <input
                        type="text"
                        className="form-control"
                        id="add1"
                        name="add1"
                      />
                      <span
                        className="placeholder bg-light"
                        data-placeholder="Address line 01"
                      />
                    </div>
                    <div className="col-md-12 form-group p_star">
                      <input
                        type="text"
                        className="form-control"
                        id="add2"
                        name="add2"
                      />
                      <span
                        className="placeholder bg-light"
                        data-placeholder="Address line 02"
                      />
                    </div>
                    <div className="col-md-12 form-group p_star">
                      <input
                        type="text"
                        className="form-control"
                        id="city"
                        name="city"
                      />
                      <span
                        className="placeholder bg-light"
                        data-placeholder="Town/City"
                      />
                    </div>
                    <div className="col-md-12 form-group p_star">
                      <select className="country_select">
                        <option value={1}>District</option>
                        <option value={2}>District</option>
                        <option value={4}>District</option>
                      </select>
                    </div>
                    <div className="col-md-12 form-group">
                      <input
                        type="text"
                        className="form-control"
                        id="zip"
                        name="zip"
                        placeholder="Postcode/ZIP"
                      />
                    </div>
                    <div className="col-md-12 form-group">
                      <div className="creat_account">
                        <input type="checkbox" id="f-option2" name="selector" />
                        <label htmlFor="f-option2">Create an account?</label>
                      </div>
                    </div>
                    <div className="col-md-12 form-group">
                      <div className="creat_account">
                        <h3>Shipping Details</h3>
                        <input type="checkbox" id="f-option3" name="selector" />
                        <label htmlFor="f-option3">
                          Ship to a different address?
                        </label>
                      </div>
                      <textarea
                        className="form-control"
                        name="message"
                        id="message"
                        rows={1}
                        placeholder="Order Notes"
                        defaultValue={""}
                      />
                    </div>
                  </form>
                </div>
                <div className="col-lg-4">
                  <div className="order_box">
                    <h2>Your Order</h2>
                    <ul className="list">
                      <li>
                        <Link to="/">
                          Product
                          <span>Total</span>
                        </Link>
                      </li>
                      <li>
                        <Link to="/">
                          <div className="flex flex-col gap-y-2 h-[360px] md:h-[480px] lg:h-[420px] overflow-y-auto overflow-x-hidden border-b">
                            {cart.map((item) => {
                              return <CartItem item={item} key={item.id} />;
                            })}
                          </div>
                        </Link>
                      </li>


                    </ul>
                    <ul className="list list_2">
                      <li>
                        <Link to="/">
                          <div className="font-semibold">
                            <span className="mr-2">Subtotal:</span> ${" "}
                            {parseFloat(total).toFixed(2)}
                          </div>
                        </Link>
                      </li>
                      <li>
                        <Link to="/">
                          Shipping
                          <span>Flat rate: $50.00</span>
                        </Link>
                      </li>
                      <li>
                        <Link to="/">
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
                            {/* <Link
          to={"/"}
          className="btn_3 button-contactForm flex p-3 justify-center items-center w-full font-medium"
        >
          View Cart
        </Link> */}
                            {/* <Link
                        to={"/"}
                        className="btn_3 button-contactForm flex p-3 justify-center items-center text-white w-full font-medium"
                      >
                        Checkout
                      </Link> */}
                          </div>
                        </Link>
                      </li>
                    </ul>





                    <div className="payment_item">
                      <div className="radion_btn">
                        <input type="radio" id="f-option5" name="selector" />
                        <label htmlFor="f-option5">Check payments</label>
                        <div className="check" />
                      </div>
                      <p>
                        Please send a check to Store Name, Store Street, Store
                        Town, Store State / County, Store Postcode.
                      </p>
                    </div>
                    <div className="payment_item active">
                      <div className="radion_btn">
                        <input type="radio" id="f-option6" name="selector" />
                        <label htmlFor="f-option6">Paypal </label>
                        <img src="img/product/single-product/card.jpg" alt="" />
                        <div className="check" />
                      </div>
                      <p>
                        Please send a check to Store Name, Store Street, Store
                        Town, Store State / County, Store Postcode.
                      </p>
                    </div>
                    <div className="creat_account">
                      <input type="checkbox" id="f-option4" name="selector" />
                      <label htmlFor="f-option4">
                        I’ve read and accept the{" "}
                      </label>
                      <Link to="/">terms &amp; conditions*</Link>
                    </div>
                    <Link to="/" onClick={clearCart} className="btn_3">
                      Proceed to Paypal
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    </div>
  );
};

export default Checkout;
