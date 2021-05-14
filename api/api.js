import axios from "axios";

let token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDliZmYzNTRlY2I4MDQ4ZDQwNTJjMGQiLCJpYXQiOjE2MjA4MzYxNjl9.a1z-zcY-drY-Q4BoUpAqDDjZ9-p5KnxLv_nnIcb2U0c";
const PORTAL_API_URL = "https://funchat-backend.herokuapp.com";

export default axios.create({
  baseURL: PORTAL_API_URL,
  headers: {
    Accept: "application/json",
    " auth-token": token,
  },
});
