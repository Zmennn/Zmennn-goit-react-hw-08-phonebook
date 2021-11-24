import { v4 as uuidv4 } from 'uuid';
import { createReducer } from '@reduxjs/toolkit';
import { submitRecord, changeFilter, deleteRecord } from './actions';
import { combineReducers } from 'redux';

function delRecord(state = {}, action) {
  const data = state.contacts.filter(elem => elem.id !== action.payload);
  localStorage.setItem('contacts', JSON.stringify(data));
  return { ...state, contacts: data };
}

function addRecord(state = {}, action) {
  if (!state.contacts.find(el => el.name === action.payload[0])) {
    const data = [
      ...state.contacts,
      { name: action.payload[0], number: action.payload[1], id: uuidv4() },
    ];
    localStorage.setItem('contacts', JSON.stringify(data));
    return { ...state, contacts: data };
  } else {
    alert(`${action.payload[0]} is already in contacts`);
    return state;
  }
}

function filterRecord(state = {}, action) {
  return { ...state, filter: action.payload };
}

export const reducer = createReducer(
  {},
  {
    [submitRecord]: addRecord,
    [changeFilter]: filterRecord,
    [deleteRecord]: delRecord,
  },
);
