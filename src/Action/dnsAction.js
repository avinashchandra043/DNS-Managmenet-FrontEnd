import { DOMAIN_LIST, RECORD_LIST } from "../ActionTypes/dnsActionType";
import { API, baseApi } from "../Apis/api";
import { store } from "../store";
const { dispatch } = store;

export const createDomain = async (domainName) => {
  try {
    const res = await baseApi.post(`${API.dnsApi}/api/dns/create`, domainName);
    if (res) {
      return res;
    }
    return false;
  } catch (err) {
    return false;
  }
};

export const listDomain = async () => {
  try {
    const res = await baseApi.get(`${API.dnsApi}/api/dns/list`);
    if (res) {
      dispatch({ type: DOMAIN_LIST, payload: res.data.data });
      return true;
    }
    return false;
  } catch (err) {
    return false;
  }
};

export const createRecord = async (recordData) => {
  try {
    const res = await baseApi.post(
      `${API.dnsApi}/api/dns/record/create`,
      recordData
    );
    if (res) {
      return true;
    } else return false;
  } catch (err) {
    return false;
  }
};

export const listRecord = async (recordData) => {
  try {
    const res = await baseApi.get(`${API.dnsApi}/api/dns/record/list`, {
      params: recordData,
    });
    if (res) {
      dispatch({ type: RECORD_LIST, payload: res.data });
      return true;
    } else return false;
  } catch (err) {
    return false;
  }
};

export const updateRecord = async (recordData) => {
  try {
    const res = await baseApi.put(
      `${API.dnsApi}/api/dns/record/update`,
      recordData
    );
    if (res) {
      return true;
    } else return false;
  } catch (err) {
    return false;
  }
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
    return false;
  }
};

export const bulkDomainCreate = async (file) => {
  try {
    const formData = new FormData();
    formData.append("file", file);
    const res = await baseApi.post(
      `${API.dnsApi}/api/dns/bulk/create`,
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
    console.log("Bulk domain import successful:", res.data);
    return res.data;
  } catch (err) {
    console.error("Error during bulk domain import:", err);
  }
};

export const bulkRecordCreate = async (file) => {
  try {
    const formData = new FormData();
    formData.append("file", file);
    const res = await baseApi.post(
      `${API.dnsApi}/api/dns/record/bulk/create`,
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
    console.log("Bulk DNS record creation successful:", res.data);
    return res.data;
  } catch (err) {
    console.error("Error during bulk DNS record creation:", err);
  }
};
