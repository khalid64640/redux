import { configureStore } from "@reduxjs/toolkit";

import {
  carsReducer,
  addCar,
  removeCar,
  changeSearchTerm,
} from "./Slices/CarsSlice";

import { formReducer, changeName, changeCost } from "./Slices/FormSlice";

const store = configureStore({
  reducer: {
    cars: carsReducer,
    form: formReducer,
  },
});

export { store, changeCost, changeName, addCar, removeCar, changeSearchTerm };
