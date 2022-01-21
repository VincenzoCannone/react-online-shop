import axios from "axios";

const BASE_URL = "http://localhost:3000/api/";
// const TOKEN =
//   JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser
//     .accessToken || "";

const TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxZTMxYjcwYjMzODdmMDRkZjcxN2Q3NSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY0MjczNTkxNSwiZXhwIjoxNjQyOTk1MTE1fQ.mt2UJtpIzSqvShRkxyW7CXXLkNiJpdZO0beSOoLCGo8";

// const user = JSON.parse(localStorage.getItem("persist:root"))?.user;
// const currentUser = user && JSON.parse(user).currentUser;
// const TOKEN = currentUser?.accessToken;

//! for fatching data
export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

//! important x users
export const userRequest = axios.create({
  baseURL: BASE_URL,
  header: { token: `Bearer ${TOKEN}` },
});
