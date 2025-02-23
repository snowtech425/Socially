import http from "@/utilities/http";
import config from "@/config";

const requests = {
  del: (url: string) => http.delete(url),
  get: (url: string, query = 0) => http.get(url, { params: query }),
  put: (url: string, body: any) => http.put(url, body),
  post: (url: string, body: any) => http.post(url, body),
};

const Auth = {
  current: (payload: number | undefined) =>
    requests.get(config.endpoints.auth.current, payload),
  login: (email: any, password: any) =>
    requests.post(config.endpoints.auth.login, { user: { email, password } }),
  register: (username: any, email: any, password: any) =>
    requests.post("/users", { user: { username, email, password } }),
};

const User = {
  add_data: (payload: any) =>
    requests.post(config.endpoints.user.add_data, payload),
};

const Agent = {
  Auth,
  User,
  // setToken: _token => { token = _token; }
};

export default Agent;
