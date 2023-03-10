import { useState } from 'react';
import { toast } from 'react-toastify';
import PropTypes from 'prop-types';
import css from './SearchBox.module.css'

export const SearchBox = ({ onSubmitInput }) => {
  const [inputValue, setInputValue] = useState('');

  const handleChange = evt => {
    const { value } = evt.currentTarget;
    setInputValue(value);
  };

  const handleSubmitForm = evt => {
    evt.preventDefault();
    if (inputValue.trim() === '') {
      toast.error('Please write something!', {
        position: 'top-right',
        autoClose: 2000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: 'colored',
      });
      return;
    }

    onSubmitInput(inputValue);
    setInputValue('');
  };

  return (
    <form onSubmit={handleSubmitForm} className={css.from}>
      <input
        type="text"
        placeholder="Search films"
        value={inputValue}
        autoFocus
        onChange={handleChange}
        autoComplete="off"
        className={css.input}
      />
      <button type="submit" className={css.submitBtn}>Search</button>
    </form>
    
  );
};

SearchBox.propTypes = {
  onSubmitInput: PropTypes.func.isRequired,
}