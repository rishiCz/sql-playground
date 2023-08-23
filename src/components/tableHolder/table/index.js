import { useState, useEffect, memo } from "react";
import { fetchCSVData } from "../../../utils/functions";
import styles from "./styles.module.css";

const Table = ({ csv }) => {
  const [csvData, setCSVData] = useState([]);
  useEffect(() => {
    if (csv) fetchCSVData(csv).then((data) => setCSVData(data));
  }, [csv]);

  return (
    <div>
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
      ): 
      <h2>Run a Query to Show Tables</h2>
      }
    </div>
  );
};

export default Table;
