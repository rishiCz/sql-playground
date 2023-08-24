import { useSelector } from 'react-redux'
import styles from './styles.module.css'
import Table from './table'
import ExportCSVButton from './exportCSVButton'

const TableHolder = ()=>{
    let tableData = null
    const handleChildData = (dataFromChild) => {
        tableData = dataFromChild
      };
    const getParentData = ()=>{
        return tableData
    }
    const table = useSelector((state)=> state.table).table
    return(
        <div className={styles.tableHolder}>
            <div className={styles.tableHeader}>
                <label className={styles.tableName}>{table.name}</label>
                <ExportCSVButton getParentData = {getParentData}/>
            </div>
            <div className={styles.tableDiv}>
                <Table csv ={table.csv} handleChildData={handleChildData}/>
            </div>
        </div>
    )
}
export default TableHolder