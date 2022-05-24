import axios from "axios";
export default axios.create({
  baseURL: "https://learning-system-3d924-default-rtdb.asia-southeast1.firebasedatabase.app/",
  responseType: "json"
});
