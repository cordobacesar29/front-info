import axios from "axios";
export const baseUrl = process.env.REACT_APP_BACKEND_URL;
const urlParams = new URLSearchParams(window.location.search);
const dep_id = urlParams.get("dep_id");
const session_id = urlParams.get("session_id");
const headers = {
  "X-Dep-ID": "5679",
  "X-Session-ID": "1ff645a47193aba7508b8b07c68d7f8af679388b1e8176b3508eff456badd3df",
};
const get = async (path) => {
  const response = await axios.get(`${baseUrl}${path}/`, { headers });
  const { data } = await response;
  return data;
};
export const api = {
  getLocationTags: () => get("locations_tags"),
  getLocations: () => get("locations"),
  getDataTable: () => get("table"),
};