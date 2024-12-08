import React from 'react'
import { Link } from 'react-router-dom'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';



const Banner = () => {
     const options = {
          items: 1,
          nav: true,
          rewind: true,
          autoplay: true,
          autoplayTimeout: 5000,
          smartSpeed: 750,
     };
     return (
          <section className="banner_part">
               <div className="container">
                    <div className="row align-items-center">
                         <div className="col-lg-12">
                              <OwlCarousel className="banner_slider owl-carousel" {...options}>
                                   <div className="single_banner_slider">
                                        <div className="row">
                                             <div className="col-lg-5 col-md-8">
                                                  <div className="banner_text">
                                                       <div className="banner_text_iner">
                                                            <h1>Wood &amp; Cloth Sofa</h1>
                                                            <p>
                                                                 Incididunt ut labore et dolore magna aliqua quis ipsum
                                                                 suspendisse ultrices gravida. Risus commodo viverra
                                                            </p>
                                                            <Link to="/" className="btn_2">
                                                                 buy now
                                                            </Link>
                                                       </div>
                                                  </div>
                                             </div>
                                             <div className="banner_img d-none d-lg-block">
                                                  <img src="img/banner_img.png" alt="" />
                                             </div>
                                        </div>
                                   </div>
                                   <div className="single_banner_slider">
                                        <div className="row">
                                             <div className="col-lg-5 col-md-8">
                                                  <div className="banner_text">
                                                       <div className="banner_text_iner">
                                                            <h1>Cloth &amp; Wood Sofa</h1>
                                                            <p>
                                                                 Incididunt ut labore et dolore magna aliqua quis ipsum
                                                                 suspendisse ultrices gravida. Risus commodo viverra
                                                            </p>
                                                            <Link to="/" className="btn_2">
                                                                 buy now
                                                            </Link>
                                                       </div>
                                                  </div>
                                             </div>
                                             <div className="banner_img d-none d-lg-block">
                                                  <img src="img/banner_img.png" alt="" />
                                             </div>
                                        </div>
                                   </div>
                                   <div className="single_banner_slider">
                                        <div className="row">
                                             <div className="col-lg-5 col-md-8">
                                                  <div className="banner_text">
                                                       <div className="banner_text_iner">
                                                            <h1>Wood &amp; Cloth Sofa</h1>
                                                            <p>
                                                                 Incididunt ut labore et dolore magna aliqua quis ipsum
                                                                 suspendisse ultrices gravida. Risus commodo viverra
                                                            </p>
                                                            <Link to="/" className="btn_2">
                                                                 buy now
                                                            </Link>
                                                       </div>
                                                  </div>
                                             </div>
                                             <div className="banner_img d-none d-lg-block">
                                                  <img src="img/banner_img.png" alt="" />
                                             </div>
                                        </div>
                                   </div>
                              </OwlCarousel>
                              <div className="slider-counter"></div>
                         </div>
                    </div>
               </div>
          </section>



     )
}

export default Banner
