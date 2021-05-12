import axiosInstance from "../../axiosInstance";
import { api } from "../../constance/api";
import { VENDOR_LIST } from "../../constance/redux-types";

export const getVendorList = (params) => {
  return (dispatch) => {
    axiosInstance
      .get(api.vendor_list, {
        params: {
          ...params,
        },
      })
      .then((response) => {
        if (response.data.status) {
          return dispatch({
            type: VENDOR_LIST,
            payload: response.data.data.finalResult,
          });
        }
      })
      .catch((error) => {
        console.log("error in geting vendor list");
      });
  };
};
