import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../contexts/CartContext";

const Product = ({ product }) => {
  const { addToCart } = useContext(CartContext);
  const { id, image, title, price } = product;
  return (


    <div className="single_product_item">
      <Link to={`/singleproduct/${id}`}>
        <img
          className="image-fluit d-flex justify-content-center align-items-center mx-auto"
          style={{ width:'200px' }}
          src={image}
          alt=""
        />
      </Link>
      <div className="single_product_text">
        <h4 className="text-gray-900">{title}</h4>
        <h3 className="text-gray-900">{price}</h3>
        <Link onClick={() => addToCart(product, id)} className="add_cart">
          + add to cart
          <i className="ti-heart" />
        </Link>
      </div>
    </div>


  );
};

export default Product;
