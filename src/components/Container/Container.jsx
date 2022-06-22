import s from './Container.module.css';
import PropTypes from 'prop-types';

function Container({ children }) {
  return <div className={s.container}>{children}</div>;
}

PropTypes.arrayOf(
  PropTypes.shape({
    children: PropTypes.array,
    children: PropTypes.object,
  }),
);
export default Container;
