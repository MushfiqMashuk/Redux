import { DESTROY_COUNTRY } from "./actionTypes";

export const countryAction = (payload = 1) => {
  return {
    type: DESTROY_COUNTRY,
    payload: payload,
  };
};
