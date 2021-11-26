import { createReducer, combineReducers } from '@reduxjs/toolkit';
import { changeFilter } from './actions';
import {
  fetchPhones,
  deleteById,
  submitPhone,
  fetchSubmitUser,
  fetchLogin,
  fetchCurrentUser,
  fetchLogout,
} from './operation';

// export function filterRecord(state = {}, action) {
//   return { ...state, filter: action.payload };
// }
const filterRecord = createReducer('', {
  [changeFilter]: (_, action) => action.payload,
  [fetchLogout.fulfilled]: () => '',
});

const contacts = createReducer([], {
  [fetchPhones.fulfilled]: (state, action) => action.payload,
});

const isLoading = createReducer(false, {
  [fetchPhones.fulfilled]: () => false,
  [fetchPhones.rejected]: () => false,
  [fetchPhones.pending]: () => true,
});

const error = createReducer(false, {
  [fetchPhones.fulfilled]: () => false,
  [fetchPhones.rejected]: () => true,
  [deleteById.reject]: () => true,
  [deleteById.fulfilled]: () => false,
});

const filter = createReducer('', {
  [changeFilter]: (_, action) => action.payload,
});

const isDelete = createReducer(false, {
  [deleteById.pending]: () => false,
  [deleteById.fulfilled]: () => true,
});

const isSubmit = createReducer(false, {
  [submitPhone.pending]: () => false,
  [submitPhone.fulfilled]: () => true,
});

const userData = createReducer(
  {},
  {
    [fetchSubmitUser.fulfilled]: (_, action) => action.payload.data.user,
    [fetchLogin.fulfilled]: (_, action) => action.payload.data.user,
    [fetchCurrentUser.fulfilled]: (_, action) => action.payload.data,
    [fetchLogout.fulfilled]: () => ({ name: '', email: '' }),
  },
);

const token = createReducer('', {
  [fetchSubmitUser.fulfilled]: (state = {}, action) =>
    action.payload.data.token,
  [fetchLogin.fulfilled]: (state = {}, action) => {
    localStorage.setItem('token', action.payload.data.token);
    return action.payload.data.token;
  },
  [fetchCurrentUser.fulfilled]: () => localStorage.getItem('token'),
  [fetchLogout.fulfilled]: () => {
    localStorage.removeItem('token');
    return '';
  },
});

const isAuth = createReducer(false, {
  [fetchSubmitUser.fulfilled]: () => true,
  [fetchLogin.fulfilled]: () => true,
  [fetchCurrentUser.fulfilled]: () => true,
  [fetchLogout.fulfilled]: () => false,
});

export const reducer = combineReducers({
  contacts,
  isLoading,
  error,
  filter,
  isDelete,
  isSubmit,
  userData,
  token,
  isAuth,
});

// localStorage.setItem(action.payload.data.token, token);
