import { DOMAIN_LIST, RECORD_LIST } from "../ActionTypes/dnsActionType";

const initialState = { domainList: [], recordList: [] };

export const dnsReducer = (state = initialState, action) => {
  switch (action.type) {
    case DOMAIN_LIST:
      return { ...state, domainList: action.payload };
    case RECORD_LIST:
      return { ...state, recordList: action.payload };
    default:
      return state;
  }
};
