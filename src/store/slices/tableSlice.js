import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  table: { name: undefined, csv: undefined },
  query: "",
  fontSize: 1,
  searchVal: "",
};
export const table = createSlice({
  name: "table",
  initialState,
  reducers: {
    setTable: (state, action) => {
      state.table = action.payload;
    },
    setQuery: (state, action) => {
      state.query = action.payload;
    },
    setFontSize: (state, action) => {
      state.fontSize = action.payload;
    },
    setSearchVAl: (state, action) => {
      state.searchVal = action.payload;
    },
  },
});

export const { setTable, setQuery, setFontSize, setSearchVAl } = table.actions;

export default table.reducer;
