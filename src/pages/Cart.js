import React, {useContext} from "react";
import { Link } from "react-router-dom";
import CartItem from "../components/CartItem";
import { CartContext } from "../contexts/CartContext";


const Cart = () => {

  const { cart, total } = useContext(CartContext);
  return (
    <div>
      <>
        <section className="breadcrumb breadcrumb_bg">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-8">
                <div className="breadcrumb_iner">
                  <div className="breadcrumb_iner_item">
                    <h2>Cart Products</h2>
                    <p>
                      Home <span>-</span>Cart Products
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* breadcrumb start*/}
        {/*================Cart Area =================*/}
        <section className="cart_area padding_top">
          <div className="container">
            <div className="cart_inner">
              <div className="table-responsive">
                <table className="table">
                  <thead>
                    <tr>
                      <th scope="col">Product</th>
                      <th scope="col">Price</th>
                      <th scope="col">Quantity</th>
                      <th scope="col">Total</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <div className="media">
                          <div className="d-flex flex-column">
                            {cart.map((item) => {
                              return <CartItem item={item} key={item.id} />;
                            })}
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr className="bottom_button">
                      <td>
                        <Link to="/" className="btn_1" href="#">
                          Update Cart
                        </Link>
                      </td>
                      <td />
                      <td />
                      <td>
                        <div className="cupon_text float-right">
                          <Link to="/" className="btn_1" href="#">
                            Close Coupon
                          </Link>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td />
                      <td />
                      <td>
                        <h5>Subtotal</h5>
                      </td>
                      <td>
                        <h5>{parseFloat(total).toFixed(2)}</h5>
                      </td>
                    </tr>
                    <tr className="shipping_area">
                      <td />
                      <td />
                      <td>
                        <h5>Shipping</h5>
                      </td>
                      <td>
                        <div className="shipping_box">
                          <ul className="list">
                            <li>
                              <Link to="/">Flat Rate: $5.00</Link>
                            </li>
                            <li>
                              <Link to="/">Free Shipping</Link>
                            </li>
                            <li>
                              <Link to="/">Flat Rate: $10.00</Link>
                            </li>
                            <li className="active">
                              <Link to="/">Local Delivery: $2.00</Link>
                            </li>
                          </ul>
                          <h6>
                            Calculate Shipping
                            <i
                              className="fa fa-caret-down"
                              aria-hidden="true"
                            />
                          </h6>
                          <select className="shipping_select">
                            <option value={1}>Bangladesh</option>
                            <option value={2}>India</option>
                            <option value={4}>Pakistan</option>
                          </select>
                          <select className="shipping_select section_bg">
                            <option value={1}>Select a State</option>
                            <option value={2}>Select a State</option>
                            <option value={4}>Select a State</option>
                          </select>
                          <input type="text" placeholder="Postcode/Zipcode" />
                          <Link to="/" className="btn_1" href="#">
                            Update Details
                          </Link>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <div className="checkout_btn_inner float-right">
                  <Link to="/" className="btn_1" href="#">
                    Continue Shopping
                  </Link>
                  <Link to="/checkout" className="btn_1 checkout_btn_1" href="#">
                    Proceed to checkout
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    </div>
  );
};

export default Cart;
