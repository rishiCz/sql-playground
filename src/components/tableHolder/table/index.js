import { useState, useEffect, memo, useRef } from "react";
import { fetchCSVData } from "../../../utils/functions";
import styles from "./styles.module.css";
import { useSelector } from "react-redux";

const Table = ({ csv, handleChildData }) => {
  const [csvData, setCSVData] = useState([]);
  const [prevSearch, setPrevSearch] = useState(null);
  const searchVal = useSelector((state) => state.table).searchVal;

  const searchTable = (str) => {
    var td = [...document.querySelectorAll("td")].find((element) =>
      element.textContent.toLowerCase().includes(str)
    );
    if (td && str !== "") {
      td.scrollIntoView({ behavior: "smooth", block: "center" });
      td.style.backgroundColor = "#afff81";
      setPrevSearch(td);
    }
  };

  useEffect(() => {
    searchTable(searchVal);
    return()=>{
      if (prevSearch) prevSearch.style.backgroundColor = "unset";
    }
    
  }, [searchVal,prevSearch]);

  useEffect(() => {
    if (csv) fetchCSVData(csv).then((data) => {setCSVData(data)
    handleChildData(data)});
  }, [csv]);

  return (
    <>
      {csvData.length > 0 ? (
        <table>
          <thead>
            <tr>
              {Object.keys(csvData[0]).map((key) => (
                <th key={key}>{key}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {csvData.map((row, index) => (
              <tr key={index}>
                {Object.values(row).map((value, idx) => (
                  <td key={idx}>{value}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <h2 className={styles.tableAlt}>Run a Query to Show Tables</h2>
      )}
    </>
  );
};

export default Table;
