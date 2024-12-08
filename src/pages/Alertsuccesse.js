import React from 'react'

const Alertsuccesse = () => {
     const handleCheckout = () => {
          alert("Your payment is successfully!");
          // You can add additional logic here, e.g., navigation or API calls.
        };
      
        return (
          <button onClick={handleCheckout} className="checkout-button">
            Proceed to Checkout
          </button>
        );
      }

export default Alertsuccesse
