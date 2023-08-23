import styles from './styles.module.css'
import TableHolder from "../../components/tableHolder"
import Inputs from '../../components/inputs'
import csvTable from '../../constants/csvTables'
import { useState } from 'react'

const Home = ()=>{
    const [csv,setCsv] = useState(csvTable.employees)
    const handleClick=()=>{
        setCsv(csvTable.customers)
    }
    console.log('ran')
    return(<div className={styles.homeDiv} >
        <button onClick={handleClick}>clcik</button>
        <Inputs/>
        <TableHolder csv = {csv}/>
    </div>)
}
export default Home