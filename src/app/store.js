import { configureStore } from '@reduxjs/toolkit';
import { TURNOFF, TURNON, VOLUME, DISPLAY } from './actions';

const powerReducer = (state = true, action) => {
  switch (action.type) {
    case TURNON:
      return true;
    case TURNOFF:
      return false;
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
export const store = configureStore({
  reducer: {
    power: powerReducer,
    volume: volumeReducer,
    display: displayReducer,
  },
});
