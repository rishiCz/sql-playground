import { useSelector } from 'react-redux'
import styles from './styles.module.css'
import Table from './table'

const TableHolder = ()=>{
    const table = useSelector((state)=> state.table).table
    return(
        <div className={styles.tableHolder}>
            <label className={styles.tableName}>{table.name}</label>
            <div className={styles.tableDiv}>
                <Table csv ={table.csv}/>
            </div>
        </div>
    )
}
export default TableHolder