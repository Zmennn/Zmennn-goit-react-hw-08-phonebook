import { createReducer, combineReducers } from '@reduxjs/toolkit';
import { changeFilter, getUserRegistration } from './actions';
import {
  fetchPhones,
  deleteById,
  submitPhone,
  fetchSubmitUser,
} from './operation';
import { createSlice } from '@reduxjs/toolkit';

export function filterRecord(state = {}, action) {
  return { ...state, filter: action.payload };
}

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
    [fetchSubmitUser.fulfilled]: (state = {}, action) => ({
      ...state,
      userData: action.payload.data.user,
    }),
  },
);

const token = createReducer('', {
  [fetchSubmitUser.fulfilled]: (state = {}, action) => ({
    ...state,
    token: action.payload.data.token,
  }),
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
});
