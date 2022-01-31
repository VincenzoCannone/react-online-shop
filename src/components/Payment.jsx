import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import StripeCheckout from "react-stripe-checkout";

const Payment = () => {
  const [stripeToken, setStripeToken] = useState(null);
  const navigate = useNavigate();

  const onToken = (token) => {
    //! CHECK
    setStripeToken(token);
    console.log(token);
  };

  useEffect(() => {
    const makeRequest = async () => {
      try {
        const res = await axios.post(
          "http://localhost:3000/api/checkout/payment",

          {
            tokenId: stripeToken.id,
            amount: 2000,
          }
        );
        //! Check if the op is successfull
        console.log(res.data);
        navigate.push("/success");
      } catch (err) {
        console.log(err);
      }
    };
    stripeToken && makeRequest();
  }, [stripeToken, navigate]);

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {stripeToken ? (
        <span>Processing.Please wait...</span>
      ) : (
        <StripeCheckout
          name="Enzo"
          image="https://avatars.githubusercontent.com/u/78362846?v=4"
          billingAddress
          shippingAddress
          amount={2000}
          token={onToken}
          stripeKey={process.env.REACT_APP_STRIPE}
        >
          <button
            style={{
              border: "none",
              width: 120,
              borderRadius: 5,
              padding: "20px",
              backgroundColor: "black",
              color: "white",
              fontWeight: "600",
              cursor: "pointer",
            }}
          >
            Pay Now
          </button>
        </StripeCheckout>
      )}
    </div>
  );
};

export default Payment;
