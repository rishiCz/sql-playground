import React, { useState, useEffect, memo } from "react";
import CSVParse from "papaparse";
import styles from './styles.module.css'

const Table = ({csv}) => {
  const [csvData, setCSVData] = useState([]);
  useEffect(() => {
    const fetchCSVData = async () => {
      const response = await fetch(csv);
      const text = await response.text();
      const result = CSVParse.parse(text, { header: true }).data;
      setCSVData(result);
    };
    if(csv)
    fetchCSVData();
  }, [csv]);

  return (
    <div>
      <table>
        <thead>
          {csvData.length > 0 && (
            <tr>
              {Object.keys(csvData[0]).map((key) => (
                <th key={key}>{key}</th>
              ))}
            </tr>
          )}
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
    </div>
  );
};

export default Table;
