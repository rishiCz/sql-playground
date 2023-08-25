import { useSelector } from "react-redux";
import styles from "./styles.module.css";
import CSVParse from "papaparse";
import { memo } from "react";

const generateCSV = (data,name = 'data') => {
  const csv = CSVParse.unparse(data);
  const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
  const link = document.createElement("a");
  const url = URL.createObjectURL(blob);

  link.href = url;
  link.setAttribute("download", `${name}.csv`);
  link.style.visibility = "hidden";

  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

const ExportCSVButton = ({ getParentData }) => {
  const table = useSelector((state) => state.table).table;
  const handleClick = () => {
    const data = getParentData();
    generateCSV(data,table.name);
  };
  return (
    table.name && (
      <button onClick={handleClick} className={styles.exportButton}>
        Export as CSV
      </button>
    )
  );
};

export default memo(ExportCSVButton)
