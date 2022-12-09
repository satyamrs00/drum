import { configureStore } from '@reduxjs/toolkit';
import { POWER, VOLUME, DISPLAY, BANK } from './actions';

const powerReducer = (state = true, action) => {
  switch (action.type) {
    case POWER:
      return !state;
    default:
      return state;
  }
}
const volumeReducer = (state = 0.30, action) => {
  switch (action.type) {
    case VOLUME:
      return action.amount;
    default:
      return state;
  }
}
const displayReducer = (state = '', action) => {
  switch (action.type) {
    case DISPLAY:
      return action.text;
    default:
      return state;
  }
}
const bankReducer = (state = false, action) => {
  switch (action.type) {
    case BANK:
      return !state;
    default:
      return state;
  }
}
export const store = configureStore({
  reducer: {
    power: powerReducer,
    volume: volumeReducer,
    display: displayReducer,
    bank: bankReducer
  },
});
