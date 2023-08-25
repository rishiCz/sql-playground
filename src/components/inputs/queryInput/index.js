import { useDispatch, useSelector } from "react-redux";
import { useRef, useState, useEffect, memo } from "react";
import styles from "./styles.module.css";
import { setQuery } from "../../../store/slices/tableSlice";
import FontSizeSelector from "../fontSizeSelector";

const QueryInput = () => {
  const query = useSelector((state)=> state.table).query
  const dispatch = useDispatch();
  const queryInput = useRef(null);
  const queryInputHolder = useRef(null);
  const lineNumberRef = useRef(null);
  const [isResizing, setIsResizing] = useState(false);
  const [initialWidth, setInitialWidth] = useState(0);
  const [startX, setStartX] = useState(0);
  const fontSize = useSelector((state)=>state.table).fontSize

  useEffect(() => {
    queryInput.current.style.fontSize=`${fontSize}rem`;
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };
  }, [isResizing,fontSize]);

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
  const handleInput = (event) => {
    dispatch(setQuery(event.target.value));
  };

  

  

  return (
    <div ref={queryInputHolder} className={styles.queryInputHolder}>
      <FontSizeSelector/>
      <div className={styles.lineNumbers} ref={lineNumberRef} >
          {query.split("\n").map((_, index) => (
            <div
              key={index}
              className={styles.lineNumber}
              style={{
                fontSize: `${fontSize}rem`,
                width:`${fontSize + 1}rem`,
                letterSpacing:`${-fontSize/10}rem`,
                paddingRight:`${fontSize*4}px`
              }}
            >
              {index + 1}
            </div>
          ))}
      </div>
      <textarea className={styles.queryInput}
        ref={queryInput}
        value = {query}
        autoCorrect="off"
        spellCheck="false"
        tabIndex="0"
        placeholder="..SQL Queries Here"
        onChange={handleInput}
      ></textarea>
      <div className={styles.resizeHandle}
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
