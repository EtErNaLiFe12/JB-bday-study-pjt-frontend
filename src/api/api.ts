import axios from "axios";

export const bdayApi = axios.create({
  baseURL: 'http://localhost:3000'
});

export const allUserApi = axios.create({
  baseURL: 'http://localhost:3000/user'
})

export const allPostApi = axios.create({
  baseURL: 'http://localhost:3000/post'
})

export const RegisterApi = axios.create({
  baseURL: 'http://localhost:3000/user/signup'
})

export const CreatePostApi = axios.create({
  baseURL: 'http://localhost:3000/post/create'
})