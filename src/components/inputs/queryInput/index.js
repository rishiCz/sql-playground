import styles from "./styles.module.css";

const QueryInput = () => {
  return (
    <div className={styles.queryInputHolder}>
      <textarea
        className={styles.queryInput}
        autoCorrect="off"
        spellCheck="false"
        tabIndex="0"
      ></textarea>
    </div>
  );
};
export default QueryInput;
