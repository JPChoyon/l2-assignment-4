import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../store";

export type Car = {
  id: string;
  brand: string;
  model: string;
  year: number;
  price: number;
};

type CarState = {
  cars: Car[];
  loading: boolean;
  error: string | null;
};

const initialState: CarState = {
  cars: [],
  loading: false,
  error: null,
};

const carSlice = createSlice({
  name: "cars",
  initialState,
  reducers: {
    setCars: (state, action: PayloadAction<Car[]>) => {
      state.cars = action.payload;
    },
  },
});

export const { setCars } = carSlice.actions;
export const selectCars = (state: RootState) => state.cars.cars;
export default carSlice.reducer;
