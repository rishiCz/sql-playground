import styles from './styles.module.css'
import Table from './table'

const TableHolder = ()=>{
    return(
        <div>
            <label className={styles.tableName}>Table 1</label>
            <Table/>
        </div>
    )
}
export default TableHolder