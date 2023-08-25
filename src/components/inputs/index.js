import { memo } from 'react'
import QueryInput from './queryInput'
import styles from './styles.module.css'

const Inputs = ()=>{
    return(
        <div className={styles.inputsHolder}>
            <QueryInput/>
        </div>
    )
}
export default memo(Inputs)