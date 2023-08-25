import { useDispatch, useSelector } from "react-redux";
import { useRef, useState, useEffect, memo } from "react";
import styles from "./styles.module.css";
import { setQuery } from "../../../store/slices/tableSlice";
import FontSizeSelector from "../fontSizeSelector";

const QueryInput = () => {
  const query = useSelector((state)=> state.table).query
  const dispatch = useDispatch();
  const queryInputRef = useRef(null);
  const queryInputHolderRef = useRef(null);
  const lineNumberRef = useRef(null);
  const [isResizing, setIsResizing] = useState(false);
  const [initialWidth, setInitialWidth] = useState(0);
  const [startX, setStartX] = useState(0);
  const fontSize = useSelector((state)=>state.table).fontSize

  useEffect(() => {
    queryInputRef.current.style.fontSize=`${fontSize}rem`;
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };
  }, [isResizing,fontSize]);

  const handleMouseDown = (e) => {
    setIsResizing(true);
    setInitialWidth(queryInputHolderRef.current.clientWidth);
    setStartX(e.clientX);
  };
  const handleMouseMove = (e) => {
    if (!isResizing) return;
    const deltaX = e.clientX - startX;
    const newWidth = initialWidth + deltaX;
    if (newWidth > 0) {
      queryInputHolderRef.current.style.width = newWidth + "px";
      queryInputRef.current.style.width = newWidth + "px";
    }
  };
  const handleMouseUp = () => {
    setIsResizing(false);
  };
  const handleInput = (event) => {
    dispatch(setQuery(event.target.value));
  };

  const handleScroll = (scrollEvent) => {
    const { scrollTop } = scrollEvent.target;
    lineNumberRef.current.scrollTop = scrollTop;
    queryInputRef.current.scrollTop = scrollTop;
  };

  

  return (
    <div ref={queryInputHolderRef} className={styles.queryInputHolder}>
      <FontSizeSelector/>
      <div className={styles.lineNumbers} ref={lineNumberRef} onScroll={handleScroll} >
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
        ref={queryInputRef}
        value = {query}
        autoCorrect="off"
        spellCheck="false"
        tabIndex="0"
        placeholder="..SQL Queries Here"
        onChange={handleInput}
        onScroll={handleScroll}
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
