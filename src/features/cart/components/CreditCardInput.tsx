import React from "react";
import { LiteCreditCardInput } from "react-native-credit-card-input";
import { cardTokenRequest } from "../../../utils/Stripe";

export const CreditCardInput = ({ name = "Impra", onSuccess }) => {
  const onChange = async (formData) => {
    const { values, status } = formData;
    const isIncomplete = Object.values(status).includes("incomplete");

    const expiry = values?.expiry.split("/");

    const card = {
      number: values.number,
      exp_month: expiry[0],
      exp_year: expiry[1],
      cvc: values.cvc,
      name: name,
    };

    if (!isIncomplete) {
      const info = await cardTokenRequest(card);
      onSuccess(info);
    }
  };

  return <LiteCreditCardInput onChange={onChange} />;
};
