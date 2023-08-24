import styles from "./styles.module.css";
import TableHolder from "../../components/tableHolder";
import Inputs from "../../components/inputs";
import QueryDropdown from "../../components/dropDown";
import RunButton from "../../components/runButton";
import Search from "../../components/search";

const Home = () => {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.left}>
          <label>IMPORT </label>
          <QueryDropdown />
          <RunButton />
        </div>
        <div className={styles.right}>
          <Search />
        </div>
      </header>
      <div className={styles.homeDiv}>
        <Inputs />
        <TableHolder />
      </div>
    </>
  );
};
export default Home;
