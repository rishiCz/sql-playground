import styles from './styles.module.css'
import { useSelector,useDispatch } from 'react-redux'
import { setFontSize } from '../../../store/slices/tableSlice'
import { memo } from 'react'

const FontSizeSelector = ()=>{
    const dispatch = useDispatch()
    const fontSize = useSelector((state)=>state.table).fontSize
    const increaseFontSize=()=>{
       if (fontSize<3) dispatch(setFontSize(fontSize+0.1))
    }
    const decreaseFontSize=()=>{
        if (fontSize>1) dispatch(setFontSize(fontSize-0.1))
    }
    return(
        <div className={styles.FontSizeSelectorDiv}>
            <button className={styles.selectorButton} onClick={decreaseFontSize}>-</button>
            <label>{parseInt(fontSize*10)}</label>
            <button className={styles.selectorButton} onClick={increaseFontSize}>+</button>
        </div>
    )
}
export default memo(FontSizeSelector)