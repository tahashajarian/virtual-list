import { combineReducers } from "redux";
import { VENDOR_LIST } from "../../constance/redux-types";

export function reducer(state = {}, { type, payload = {} }) {
  switch (type) {
    case VENDOR_LIST:
      const alreadyList = state.vendor_list || [];
      return {
        ...state,
        vendor_list: [...alreadyList, ...payload],
      };
    default:
      return { ...state };
  }
}

// export default reducer;

export default reducer;
