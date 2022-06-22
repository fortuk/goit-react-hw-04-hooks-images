import { useState } from 'react';
import PropTypes from 'prop-types';
import s from './Searchbar.module.css';

export default function Searchbar({ onSubmit }) {
  const [input, setInput] = useState('');

  const handleNameChange = event => {
    setInput(event.currentTarget.value.toLowerCase());
  };

  const handleSubmit = event => {
    event.preventDefault();

    if (input.trim() === '') {
      alert('Введите слово для поиска');
      return;
    }
    onSubmit(input);
  };

  return (
    <header className={s.Searchbar}>
      <form onSubmit={handleSubmit} className={s.SearchForm}>
        <button type="submit" className={s.SearchFormButton}>
          <span className={s.SearchFormButtonLabel}>Search</span>
        </button>

        <input
          className={s.SearchFormInput}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          value={input}
          onChange={handleNameChange}
        />
      </form>
    </header>
  );
}

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
