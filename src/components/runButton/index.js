import styles from "./styles.module.css";
import { setTable } from "../../store/slices/tableSlice";
import { useDispatch, useSelector } from "react-redux";
import { getTableFromQuery } from "../../utils/functions";
import { memo } from "react";

const RunButton = () => {
  const query = useSelector((state) => state.table).query;
  const dispatch = useDispatch();
  const handleClick = () => {
    const table = getTableFromQuery(query.toLowerCase())
    dispatch(setTable(table));
  };
  return (
    <button className={styles.runButton} onClick={handleClick}>
      Run
    </button>
  );
};
export default memo(RunButton)
