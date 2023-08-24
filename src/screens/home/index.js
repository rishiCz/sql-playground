import styles from "./styles.module.css";
import TableHolder from "../../components/tableHolder";
import Inputs from "../../components/inputs";
import QueryDropdown from "../../components/dropDown";
import RunButton from "../../components/runButton";

const Home = () => {
  return (
    <>
      <header className="Header">
        <label>Import </label>
        <QueryDropdown />
        <RunButton />
      </header>
      <div className={styles.homeDiv}>
        <Inputs />
        <TableHolder />
      </div>
    </>
  );
};
export default Home;
