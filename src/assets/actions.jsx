import {
  configureStore,
  createAsyncThunk,
  createSlice,
} from "@reduxjs/toolkit";

const initialState = {
  data: [],
  current: {},
};
export const getData = createAsyncThunk("getData", async (steps) => {
  const { name, age } = steps;
  const a = {
    name: name.value,
    age: age.value,
  };
  return a;
});
//accepts an object of reducer functions, a slice name, and an initial state value, and automatically generates a slice reducer with corresponding action creators and action types.
const Slice = createSlice({
  name: "Info",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getData.fulfilled, (state, { payload }) => {
   //   console.log(payload);
      state.data.push(payload);
      state.current = payload;
      
    });
  },
});
// It can automatically combine your slice reducers, adds whatever Redux middleware you supply,
const store = configureStore({
  reducer: {
    Info: Slice.reducer,
  },
});

export default store;
