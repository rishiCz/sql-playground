import { useDispatch, useSelector } from "react-redux";
import { useRef, useState, useEffect, memo } from "react";
import styles from "./styles.module.css";
import { setQuery } from "../../../store/slices/tableSlice";

const QueryInput = () => {
  const queryInput = useRef(null);
  const queryInputHolder = useRef(null);
  const [isResizing, setIsResizing] = useState(false);
  const [initialWidth, setInitialWidth] = useState(0);
  const [startX, setStartX] = useState(0);

  const handleMouseDown = (e) => {
    setIsResizing(true);
    setInitialWidth(queryInputHolder.current.clientWidth);
    setStartX(e.clientX);
  };
  const handleMouseMove = (e) => {
    if (!isResizing) return;
    const deltaX = e.clientX - startX;
    const newWidth = initialWidth + deltaX;
    if (newWidth > 0) {
      queryInputHolder.current.style.width = newWidth + "px";
      queryInput.current.style.width = newWidth + "px";
    }
  };
  const handleMouseUp = () => {
    setIsResizing(false);
  };
  useEffect(() => {
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };
  }, [isResizing]);

  const query = useSelector((state)=> state.table).query
  const dispatch = useDispatch();
  const handleInput = (event) => {
    dispatch(setQuery(event.target.value));
  };

  return (
    <div ref={queryInputHolder} className={styles.queryInputHolder}>
      <textarea
        ref={queryInput}
        className={styles.queryInput}
        value = {query}
        autoCorrect="off"
        spellCheck="false"
        tabIndex="0"
        placeholder="..SQL Queries Here"
        onChange={handleInput}
      ></textarea>
      <div
        className={styles.resizeHandle}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
      >
        <p>•</p>
        <p>•</p>
        <p>•</p>
      </div>
    </div>
  );
};
export default memo(QueryInput);
