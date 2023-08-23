import styles from './styles.module.css'
import TableHolder from "../../components/tableHolder"
import Inputs from '../../components/inputs'

const Home = ()=>{
    return(<div className={styles.homeDiv} >
        <Inputs/>
        <TableHolder/>
    </div>)
}
export default Home