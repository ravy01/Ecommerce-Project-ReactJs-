import React from "react";
import client_logo1 from '../img/client_logo/client_logo_1.png'
import client_logo2 from '../img/client_logo/client_logo_2.png'
import client_logo3 from '../img/client_logo/client_logo_3.png'
import client_logo4 from '../img/client_logo/client_logo_4.png'
import client_logo5 from '../img/client_logo/client_logo_5.png'

const Clientlogo = () => {
  return (
    <section className="client_logo padding_top">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-12">
            <div className="single_client_logo">
              <img src={client_logo1} alt="" />
            </div>
            <div className="single_client_logo">
              <img src={client_logo2} alt="" />
            </div>
            <div className="single_client_logo">
              <img src={client_logo3} alt="" />
            </div>
            <div className="single_client_logo">
              <img src={client_logo4} alt="" />
            </div>
            <div className="single_client_logo">
              <img src={client_logo5} alt="" />
            </div>
            <div className="single_client_logo">
              <img src={client_logo3} alt="" />
            </div>
            <div className="single_client_logo">
              <img src={client_logo1} alt="" />
            </div>
            <div className="single_client_logo">
              <img src={client_logo2} alt="" />
            </div>
            <div className="single_client_logo">
              <img src={client_logo3} alt="" />
            </div>
            <div className="single_client_logo">
              <img src={client_logo4} alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Clientlogo;
