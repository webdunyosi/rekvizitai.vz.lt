import { configureStore } from "@reduxjs/toolkit";
import companyReducer from "./companySlice";
import userReducer from "./userSlice";

const store = configureStore({
  reducer: {
    company: companyReducer,
    user: userReducer,
  },
});

export default store;
