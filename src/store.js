import { configureStore } from "@reduxjs/toolkit";
import photoReducer from "./features/photo/photoSlice";
import imagesReducer from "./features/images/imagesSlice";

export const store = configureStore({
  reducer: {
    photo: photoReducer,
    images: imagesReducer,
  },
});
