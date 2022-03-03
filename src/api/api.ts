import axios from "axios";

const BASE_URL = 'http://localhost:3000';

//base url
export const bdayApi = axios.create({
  baseURL: BASE_URL
});

// all data for user
export const allUserApi = axios.create({
  baseURL: `${BASE_URL}/user`
})

// all data for posts
export const allPostApi = axios.create({
  baseURL: `${BASE_URL}/post`
})

// signup
export const RegisterApi = axios.create({
  baseURL: `${BASE_URL}/user/signup`
})

// create
export const CreatePostApi = axios.create({
  baseURL: `${BASE_URL}/post/create`
})