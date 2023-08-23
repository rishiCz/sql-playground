import styles from './styles.module.css'
import Table from './table'

const TableHolder = ({csv})=>{
    return(
        <div className={styles.tableHolder}>
            <label className={styles.tableName}>Table 1</label>
            <div className={styles.tableDiv}>
                <Table csv ={csv}/>
            </div>
        </div>
    )
}
export default TableHolder