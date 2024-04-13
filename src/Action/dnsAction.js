import { DOMAIN_LIST, RECORD_LIST } from "../ActionTypes/dnsActionType";
import { API, baseApi } from "../Apis/api";
import { store } from "../store";
const { dispatch } = store;

export const createDomain = async (domainName) => {
  try {
    const res = await baseApi.post(`${API.dnsApi}/api/dns/create`, domainName);
    return res;
  } catch (err) {}
};

export const listDomain = async () => {
  try {
    const res = await baseApi.get(`${API.dnsApi}/api/dns/list`);
    if (res) {
      dispatch({ type: DOMAIN_LIST, payload: res.data.data });
    }
  } catch (err) {}
};

export const createRecord = async (recordData) => {
  try {
    const res = await baseApi.post(
      `${API.dnsApi}/api/dns/record/create`,
      recordData
    );
    return res;
  } catch (err) {}
};

export const listRecord = async (recordData) => {
  try {
    const res = await baseApi.get(`${API.dnsApi}/api/dns/record/list`, {
      params: recordData,
    });
    if (res) {
      dispatch({ type: RECORD_LIST, payload: res.data });
    }
  } catch (err) {}
};

export const updateRecord = async (recordData) => {
  try {
    const res = await baseApi.put(
      `${API.dnsApi}/api/dns/record/update`,
      recordData
    );
    return res;
  } catch (err) {}
};

export const deleteRecord = async (recordData) => {
  try {
    let deleteRequestData = {
      hostedZoneId: recordData.hostedZoneId,
      name: recordData.name || recordData.Name,
      type: recordData.type || recordData.Type,
      ttl: recordData.ttl || recordData.TTL,
      value: recordData.value
        ? recordData.value.map((record) => ({ Value: record.Value }))
        : recordData.ResourceRecords
        ? recordData.ResourceRecords.map((record) => ({ Value: record.Value }))
        : [],
    };
    const response = await baseApi.delete(
      `${API.dnsApi}/api/dns/record/delete`,
      { data: deleteRequestData }
    );
    return response;
  } catch (err) {
    console.error("Error while deleting record:", err);
  }
};
