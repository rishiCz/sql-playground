import styles from "./styles.module.css";
import TableHolder from "../../components/tableHolder";
import Inputs from "../../components/inputs";
import QueryDropdown from "../../components/dropDown";
import RunButton from "../../components/runButton";
import Search from "../../components/search";
import Logo from "../../assets/sqlLogo.png"
import { memo } from "react";

const Home = () => {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.left}>
          <div>
            <img className={styles.logo} src={Logo}/>
            <label>PlayGround</label>
          </div>
          
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
export default memo(Home)
