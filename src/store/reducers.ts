import { combineReducers } from "@reduxjs/toolkit";
import { reducer as authReducer } from "./slices/authSlice";

const appReducer = combineReducers({
  /**
   * All the reducers
   * that needs to be combined
   * will be added here
   */

  auth: authReducer,
});

const rootReducer = (state: any, action: any) => {
  // // Clear all data in redux store to initial.
  // if(action.type === "reset")
  //    state = undefined;

  return appReducer(state, action);
};

export default rootReducer;
