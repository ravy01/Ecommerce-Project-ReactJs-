import React, { useContext } from "react";
import { ProductContext } from "../contexts/ProductContext";
import Product from "./Product";
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

const Bestseller = () => {
  const { products } = useContext(ProductContext);

  // get only men's and women's clothing category
  const filteredProducts = products.filter((item) => {
    return item.id === 1 || item.id === 2 || item.id === 5 || item.id === 15;

  });

  const options = {
    items: 1,
    nav: true,
    rewind: true,
    autoplay: true,
    autoplayTimeout: 5000,
    smartSpeed: 750,
  };
  return (
    <section className="product_list section_padding">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-12">
            <div className="section_tittle text-center">
              <h2>
                Best Sellers <span>shop</span>
              </h2>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <OwlCarousel className="product_list_slider owl-carousel" {...options}>
              <div className="single_product_item">
                <section className="py-5">
                  <div className="container">
                    <div className="row g-4">
                      {filteredProducts.map((product) => (
                        <div
                          className="col-12 col-md-6 col-lg-4 col-xl-3"
                          key={product.id}
                        >
                          <Product product={product} />
                        </div>
                      ))}
                    </div>
                  </div>
                </section>
              </div>

              <div className="single_product_item">
                <section className="py-5">
                  <div className="container">
                    <div className="row g-4">
                      {filteredProducts.map((product) => (
                        <div
                          className="col-12 col-md-6 col-lg-4 col-xl-3"
                          key={product.id}
                        >
                          <Product product={product} />
                        </div>
                      ))}
                    </div>
                  </div>
                </section>
              </div>

              <div className="single_product_item">
                <section className="py-5">
                  <div className="container">
                    <div className="row g-4">
                      {filteredProducts.map((product) => (
                        <div
                          className="col-12 col-md-6 col-lg-4 col-xl-3"
                          key={product.id}
                        >
                          <Product product={product} />
                        </div>
                      ))}
                    </div>
                  </div>
                </section>
              </div>

            </OwlCarousel>
          </div>
        </div>
      </div>
    </section>




  );
};

export default Bestseller;
