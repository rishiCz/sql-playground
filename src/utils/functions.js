import CSVParse from "papaparse";
import csvTable from "../constants/csvTables";

export const getTableFromQuery = (query) => {
  let table = null;
  if (query.includes("employees")) table = csvTable.employees;
  else if (query.includes("customers")) table = csvTable.customers;
  else if (query.includes("categories")) table = csvTable.categories;
  else table = csvTable.categories;
  return table;
};

export const fetchCSVData = async (csv) => {
    const response = await fetch(csv);
    const text = await response.text();
    const result = CSVParse.parse(text, { header: true }).data;
    return result
}
