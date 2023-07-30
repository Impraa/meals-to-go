import axios from "axios";
import createStripe from "stripe-client";

const stripe = createStripe(
  "pk_test_51NAZcaI4nqkAwJJnkVYMzv8NWUsQFBk7cZQojnfnjDk85WFVL0ya2I9ZQiV0mke1PwZ0AQOE9jCbOks4tvpFOwcu00EdECl4wL"
);

export const cardTokenRequest = (card) => stripe.createToken({ card });

export const payRequest = async (token, amount, name) => {
  return await axios
    .post(
      "http://192.168.1.3:3000/payment",
      { token, amount, name },
      {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      }
    )
    .then((response) => response.data)
    .then((data) => data)
    .catch((error) => console.log(error));
};
