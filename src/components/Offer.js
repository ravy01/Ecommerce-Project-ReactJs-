import React from "react";
import { Link } from "react-router-dom";
import offerimg from '../img/offer_img.png'

const Offer = () => {
  return (
    <section className="our_offer section_padding">
      <div className="container">
        <div className="row align-items-center justify-content-between">
          <div className="col-lg-6 col-md-6">
            <div className="offer_img">
              <img src={offerimg} alt="" />
            </div>
          </div>
          <div className="col-lg-6 col-md-6">
            <div className="offer_text">
              <h2>Weekly Sale on 60% Off All Products</h2>
              <div className="date_countdown">
                <div id="timer">
                  <div id="days" className="date" />
                  <div id="hours" className="date" />
                  <div id="minutes" className="date" />
                  <div id="seconds" className="date" />
                </div>
              </div>
              <div className="input-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="enter email address"
                  aria-label="Recipient's username"
                  aria-describedby="basic-addon2"
                />
                <div className="input-group-append">
                  <Link
                    to="/"
                    className="input-group-text btn_2"
                    id="basic-addon2"
                  >
                    book now
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Offer;
