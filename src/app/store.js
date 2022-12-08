import { configureStore } from '@reduxjs/toolkit';
import { TURNOFF, TURNON } from './actions';

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
export const store = configureStore({
  reducer: {
    power: powerReducer,
  },
});
