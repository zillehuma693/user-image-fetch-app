import axios from "axios";
const Instance = axios.create({
  baseURL: "https://api.unsplash.com/",
  headers: {
    Authorization: "Client-ID QIQIug3MN682gM4F4FgQ3sQCklk39F8oC_HX94QpsnA",
  },
});
const imageApi = (data, page) => {
  return Instance.get(`search/photos?query=${data}&page=${page}`)
    .then((res) => res)
    .catch((error) => error.response);
};
const userApi = (data, page) => {
  return Instance.get(`search/users?query=${data}&page=${page}`);
};
const profileApi = (username) => {
  return Instance.get(`search/users?query=${username}`);
};

export { imageApi, userApi, profileApi };
