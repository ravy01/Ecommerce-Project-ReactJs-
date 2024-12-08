import React, {useContext} from 'react'
import CartItem from "../components/CartItem";
import { CartContext } from "../contexts/CartContext";


const Confirmation = () => {
     const { cart,  total } = useContext(CartContext);
     return (
          <>
               {/*================ confirmation part start =================*/}
               <section className="confirmation_part padding_top">
                    <div className="container">
                         <div className="row">
                              <div className="col-lg-12">
                                   <div className="confirmation_tittle">
                                        <span>Thank you. Your order has been received.</span>
                                   </div>
                              </div>
                              <div className="col-lg-6 col-lx-4">
                                   <div className="single_confirmation_details">
                                        <h4>order info</h4>
                                        <ul>
                                             <li>
                                                  <p>order number</p>
                                                  <span>: 60235</span>
                                             </li>
                                             <li>
                                                  <p>data</p>
                                                  <span>: Oct 03, 2017</span>
                                             </li>
                                             <li>
                                                  <p>total</p>
                                                  <span>: USD 2210</span>
                                             </li>
                                             <li>
                                                  <p>mayment methord</p>
                                                  <span>: Check payments</span>
                                             </li>
                                        </ul>
                                   </div>
                              </div>
                              <div className="col-lg-6 col-lx-4">
                                   <div className="single_confirmation_details">
                                        <h4>Billing Address</h4>
                                        <ul>
                                             <li>
                                                  <p>Street</p>
                                                  <span>: 56/8</span>
                                             </li>
                                             <li>
                                                  <p>city</p>
                                                  <span>: Los Angeles</span>
                                             </li>
                                             <li>
                                                  <p>country</p>
                                                  <span>: United States</span>
                                             </li>
                                             <li>
                                                  <p>postcode</p>
                                                  <span>: 36952</span>
                                             </li>
                                        </ul>
                                   </div>
                              </div>
                              <div className="col-lg-6 col-lx-4">
                                   <div className="single_confirmation_details">
                                        <h4>shipping Address</h4>
                                        <ul>
                                             <li>
                                                  <p>Street</p>
                                                  <span>: 56/8</span>
                                             </li>
                                             <li>
                                                  <p>city</p>
                                                  <span>: Los Angeles</span>
                                             </li>
                                             <li>
                                                  <p>country</p>
                                                  <span>: United States</span>
                                             </li>
                                             <li>
                                                  <p>postcode</p>
                                                  <span>: 36952</span>
                                             </li>
                                        </ul>
                                   </div>
                              </div>
                         </div>
                         <div className="row">
                              <div className="col-lg-12">
                                   <div className="order_details_iner">
                                        <h3>Order Details</h3>
                                        <table className="table table-borderless">
                                             <thead>
                                                  <tr>
                                                       <th scope="col" colSpan={2}>
                                                            Product
                                                       </th>
                                                       
                                                       <th scope="col">Total</th>
                                                  </tr>
                                             </thead>
                                             <tbody>
                                                  <tr>
                                                       <th colSpan={2}>
                                                            <div className="flex flex-col gap-y-2 h-[360px] md:h-[480px] lg:h-[420px] overflow-y-auto overflow-x-hidden border-b text-dark" >
                                                                 {cart.map((item) => {
                                                                      return <CartItem item={item} key={item.id} />;
                                                                 })}
                                                            </div>
                                                       </th>
                                                       
                                                       <th>
                                                            {" "}
                                                            <div className="font-semibold">
                                                                 <span className="mr-2">Subtotal:</span> ${" "}
                                                                 {parseFloat(total).toFixed(2)}
                                                            </div>
                                                       </th>
                                                  </tr>
                                                  <tr>
                                                       <th colSpan={3}>shipping</th>
                                                       <th>
                                                            <span>flat rate: $50.00</span>
                                                       </th>
                                                  </tr>
                                             </tbody>
                                             <tfoot>
                                                  <tr>
                                                       <th scope="col" colSpan={3}>
                                                            Quantity
                                                       </th>
                                                       <th scope="col">Total</th>
                                                  </tr>
                                             </tfoot>
                                        </table>
                                   </div>
                              </div>
                         </div>
                    </div>
               </section>
               {/*================ confirmation part end =================*/}
          </>

     )
}

export default Confirmation
