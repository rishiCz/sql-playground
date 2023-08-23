import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  table:{name:undefined,csv:undefined},
  query:''
};
export const table = createSlice({
  name: "table",
  initialState,
  reducers: {
    setTable: (state, action) => {
      state.table=action.payload
    },
    setQuery: (state,action) =>{
      state.query=action.payload
    }
  },
});

export const {
  setTable,
  setQuery
} = table.actions;

export default table.reducer;
