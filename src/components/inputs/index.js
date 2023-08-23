import QueryDropdown from './dropDown'
import QueryInput from './queryInput'
import RunButton from './runButton'
import styles from './styles.module.css'

const Inputs = ()=>{
    return(
        <div className={styles.inputsHolder}>
            <label>Import </label>
            <QueryDropdown/>
            <label>. .</label>
            <RunButton/>
            <QueryInput/>
        </div>
    )
}
export default Inputs