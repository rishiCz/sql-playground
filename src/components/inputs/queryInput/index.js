import { useDispatch } from "react-redux";
import styles from "./styles.module.css";
import { setQuery } from "../../../store/slices/tableSlice";

const QueryInput = () => {
  const dispatch = useDispatch()
  const handleInput = (event)=>{
    dispatch(setQuery(event.target.value))
  }
  return (
    <div className={styles.queryInputHolder}>
      <textarea
        className={styles.queryInput}
        autoCorrect="off"
        spellCheck="false"
        tabIndex="0"
        onChange={handleInput}
      ></textarea>
    </div>
  );
};
export default QueryInput;
