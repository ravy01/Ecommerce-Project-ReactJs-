import React, { useContext } from "react";
import { ProductContext } from "../contexts/ProductContext";
import Product from "./Product";
import { Link } from "react-router-dom";

const Category = () => {

  const { products } = useContext(ProductContext);

  // get only men's and women's clothing category
  const filteredProducts = products.filter((item) => {
    return item.id;
         
  });

  return (
    <section className="cat_product_area section_padding">
      <div className="container">
        <div className="row">
          <div className="col-lg-3">
            <div className="left_sidebar_area">
              <aside className="left_widgets p_filter_widgets">
                <div className="l_w_title">
                  <h3>Browse Categories</h3>
                </div>
                <div className="widgets_inner">
                  <ul className="list">
                    <li>
                      <Link to="/">Frozen Fish</Link>
                      <span>(250)</span>
                    </li>
                    <li>
                      <Link to="/">Dried Fish</Link>
                      <span>(250)</span>
                    </li>
                    <li>
                      <Link to="/">Fresh Fish</Link>
                      <span>(250)</span>
                    </li>
                    <li>
                      <Link to="/">Meat Alternatives</Link>
                      <span>(250)</span>
                    </li>
                    <li>
                      <Link to="/">Fresh Fish</Link>
                      <span>(250)</span>
                    </li>
                    <li>
                      <Link to="/">Meat Alternatives</Link>
                      <span>(250)</span>
                    </li>
                    <li>
                      <Link to="/">Meat</Link>
                      <span>(250)</span>
                    </li>
                  </ul>
                </div>
              </aside>
              <aside className="left_widgets p_filter_widgets">
                <div className="l_w_title">
                  <h3>Product filters</h3>
                </div>
                <div className="widgets_inner">
                  <ul className="list">
                    <li>
                      <Link to="/">Apple</Link>
                    </li>
                    <li>
                      <Link to="/">Asus</Link>
                    </li>
                    <li className="active">
                      <Link to="/">Gionee</Link>
                    </li>
                    <li>
                      <Link to="/">Micromax</Link>
                    </li>
                    <li>
                      <Link to="/">Samsung</Link>
                    </li>
                  </ul>
                  <ul className="list">
                    <li>
                      <Link to="/">Apple</Link>
                    </li>
                    <li>
                      <Link to="/">Asus</Link>
                    </li>
                    <li className="active">
                      <Link to="/">Gionee</Link>
                    </li>
                    <li>
                      <Link to="/">Micromax</Link>
                    </li>
                    <li>
                      <Link to="/">Samsung</Link>
                    </li>
                  </ul>
                </div>
              </aside>
              <aside className="left_widgets p_filter_widgets">
                <div className="l_w_title">
                  <h3>Color Filter</h3>
                </div>
                <div className="widgets_inner">
                  <ul className="list">
                    <li>
                      <Link to="/">Black</Link>
                    </li>
                    <li>
                      <Link to="/">Black Leather</Link>
                    </li>
                    <li className="active">
                      <Link to="/">Black with red</Link>
                    </li>
                    <li>
                      <Link to="/">Gold</Link>
                    </li>
                    <li>
                      <Link to="/">Spacegrey</Link>
                    </li>
                  </ul>
                </div>
              </aside>
              <aside className="left_widgets p_filter_widgets price_rangs_aside">
                <div className="l_w_title">
                  <h3>Price Filter</h3>
                </div>
                <div className="widgets_inner">
                  <div className="range_item">
                    {/* <div id="slider-range"></div> */}
                    <input
                      type="text"
                      className="js-range-slider"
                      defaultValue=""
                    />
                    <div className="d-flex">
                      <div className="price_text">
                        <p>Price :</p>
                      </div>
                      <div className="price_value d-flex justify-content-center">
                        <input
                          type="text"
                          className="js-input-from"
                          id="amount"
                          readOnly=""
                        />
                        <span>to</span>
                        <input
                          type="text"
                          className="js-input-to"
                          id="amount"
                          readOnly=""
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </aside>
            </div>
          </div>
          <div className="col-lg-9">
            <div className="row">
              <div className="col-lg-12">
                <div className="product_top_bar d-flex justify-content-between align-items-center">
                  <div className="single_product_menu">
                    <p>
                      <span>10000 </span> Prodict Found
                    </p>
                  </div>
                  <div className="single_product_menu d-flex">
                    <h5>short by : </h5>
                    <select class="form-select mx-1 ">
                      <option data-display="Select">name</option>
                      <option value="1">price</option>
                      <option value="2">product</option>
                    </select>
                  </div>
                  <div className="single_product_menu d-flex">
                    <h5>show :</h5>
                    <div className="top_pageniation">
                      <ul>
                        <li>1</li>
                        <li>2</li>
                        <li>3</li>
                      </ul>
                    </div>
                  </div>
                  <div className="single_product_menu d-flex">
                    <div className="input-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="search"
                        aria-describedby="inputGroupPrepend"
                      />
                      <div className="input-group-prepend">
                        <span
                          className="input-group-text"
                          id="inputGroupPrepend"
                        >
                          <i className="ti-search" />
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row align-items-center latest_product_inner">
              <section className="py-5">
                <div className="container">
                  <div className="row g-4">
                    {filteredProducts.map((product) => (
                      <div
                        className="col-4 "
                        key={product.id}
                      >
                        <Product product={product} />
                      </div>
                    ))}
                  </div>
                </div>
              </section>
              <div className="col-lg-12">
                <div className="pageination">
                  <nav aria-label="Page navigation example">
                    <ul className="pagination justify-content-center">
                      <li className="page-item">
                        <Link
                          to="/"
                          className="page-link"
                          href="#"
                          aria-label="Previous"
                        >
                          <i className="ti-angle-double-left" />
                        </Link>
                      </li>
                      <li className="page-item">
                        <Link to="/" className="page-link" href="#">
                          1
                        </Link>
                      </li>
                      <li className="page-item">
                        <Link to="/" className="page-link" href="#">
                          2
                        </Link>
                      </li>
                      <li className="page-item">
                        <Link to="/" className="page-link" href="#">
                          3
                        </Link>
                      </li>
                      <li className="page-item">
                        <Link to="/" className="page-link" href="#">
                          4
                        </Link>
                      </li>
                      <li className="page-item">
                        <Link to="/" className="page-link" href="#">
                          5
                        </Link>
                      </li>
                      <li className="page-item">
                        <Link to="/" className="page-link" href="#">
                          6
                        </Link>
                      </li>
                      <li className="page-item">
                        <Link
                          to="/"
                          className="page-link"
                          href="#"
                          aria-label="Next"
                        >
                          <i className="ti-angle-double-right" />
                        </Link>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Category;
