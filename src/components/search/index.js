import { useDispatch} from 'react-redux'
import { setSearchVAl } from '../../store/slices/tableSlice'
import styles from './styles.module.css'

const Search = ()=>{
    const dispatch = useDispatch()
    const handleChange = (event) => {
        dispatch(setSearchVAl(event.target.value.toLowerCase()))
    }
    return(
        <input placeholder='Search Table' type='text' className={styles.search} onChange={handleChange}/>
    )
}
export default Search