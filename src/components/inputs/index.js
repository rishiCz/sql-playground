import QueryInput from './queryInput'
import RunButton from './runButton'
import styles from './styles.module.css'

const Inputs = ()=>{
    return(
        <div className={styles.inputsHolder}>
            <RunButton/>
            <QueryInput/>
        </div>
    )
}
export default Inputs