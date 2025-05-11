import { useId } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { filterChange } from '../../redux/filtersSlice';
import css from './SearchBox.module.css';

export default function SearchBox() {
  const id = useId();
  const filter = useSelector(state => state.filters.name);
  const dispatch = useDispatch();

  const handleFilterChange = (evt) => {
    dispatch(filterChange(evt.target.value));
  }; 

  return (
    <div className={css.boxWrapper}>
      <label className={css.labelSearch} htmlFor={id}>
        Find contacts by name
      </label>
      <input
        className={css.inputSearch}
        type="text"
        id={id}
        value={filter}
        onChange={handleFilterChange}
        placeholder="Enter contact name..."
      />
    </div>
  );
}