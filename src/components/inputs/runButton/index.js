import styles from "./styles.module.css";
import csvTable from "../../../constants/csvTables";
import { setTable } from "../../../store/slices/tableSlice";
import { useDispatch, useSelector } from "react-redux";

const RunButton = () => {
  const query = useSelector((state) => state.table).query;
  const dispatch = useDispatch();
  const handleClick = () => {
    let table = null;
      if(query.includes("employees")) table = csvTable.employees;
      else if (query.includes("customers")) table = csvTable.customers
      else if(query.includes("categories")) table = csvTable.categories;
      else  table = csvTable.categories;
    dispatch(setTable(table));
  };
  return (
    <button className={styles.runButton} onClick={handleClick}>
      Run
    </button>
  );
};
export default RunButton;
