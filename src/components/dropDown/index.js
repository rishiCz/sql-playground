import { setQuery } from '../../store/slices/tableSlice';
import { useDispatch} from 'react-redux';
import styles from './styles.module.css'
import { memo } from 'react';

const QueryDropdown = () => {
  const queries = [
    'SELECT * FROM employees',
    'SELECT * FROM customers',
    'SELECT * FROM categories'
  ];
  const dispatch = useDispatch();
  const handleQueryChange = (event) => {
    dispatch(setQuery(event.target.value))
  };

  return (
    
      <select onChange={handleQueryChange} value='' className={styles.queryDrop}>
        <option value="" disabled>Select Predefined Queries</option>
        {queries.map((query, index) => (
          <option key={index} value={query}>
            {query}
          </option>
        ))}
      </select>
  );
};

export default memo(QueryDropdown)
