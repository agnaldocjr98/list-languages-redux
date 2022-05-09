import { configureStore } from "@reduxjs/toolkit";
import sliceLanguages from "./sliceLanguages";

const store = configureStore({
  reducer: {
    languages: sliceLanguages,
  },
});

export default store;
