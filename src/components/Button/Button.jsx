import PropTypes from 'prop-types';
import s from './Button.module.css';

export default function Button({ handleClickBtn }) {
  return (
    <button type="button" className={s.Button} onClick={handleClickBtn}>
      Load more
    </button>
  );
}

Button.propTypes = {
  handleClickBtn: PropTypes.func.isRequired,
};
