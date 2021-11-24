import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const url = '/contacts';
axios.defaults.baseURL = `https://connections-api.herokuapp.com`;
const userRegister = '/users/signup';
const userLogin = '/users/login';
const userCurrent = '/users/current';
const userLogout = '/users/logout';
// BASE_USER_URL = `https://connections-api.herokuapp.com`;

export const fetchPhones = createAsyncThunk('phones/fetchList', async () => {
  const phones = await axios.get(url);
  return phones.data;
});

export const deleteById = createAsyncThunk('phones/delete', async ev => {
  const id = ev.target.id;
  await axios.delete(`${url}/${id}`);
  return;
});

export const submitPhone = createAsyncThunk('phones/submit', async data => {
  await axios.post(url, data);
  return;
});

export const fetchSubmitUser = createAsyncThunk('user/submit', async data => {
  const request = await axios.post(userRegister, data, {
    'Content-Type': 'application/json',
  });
  return request;
});
