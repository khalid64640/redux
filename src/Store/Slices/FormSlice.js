import { createSlice } from "@reduxjs/toolkit";
import { addCar } from "./CarsSlice";
const formSlice = createSlice({
  name: "form",
  initialState: {
    name: "",
    cost: 0,
  },
  reducers: {
    changeName(state, action) {
      state.name = action.payload;
    },

    changeCost(state, action) {
      state.cost = action.payload;
    },
  },
  // the extraReducers for input when we enter data to the input and enter then clear the input data
  // first we import the addCar reucer action creator to formSlice from the carSlice
  extraReducers(builder) {
    builder.addCase(addCar, (state, action) => {
      state.name='';
      state.cost= 0;
    })
  }
});


export const { changeName,changeCost } = formSlice.actions;

//this is the single combine reducer 
export const formReducer = formSlice.reducer;