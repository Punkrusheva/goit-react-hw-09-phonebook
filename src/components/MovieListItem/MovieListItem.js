import React from 'react';
import PropTypes from 'prop-types';
import styles from './MovieListItem.module.css';
import { Link } from "react-router-dom";

function MovieListItem({ movie, state }) {
    return (
    <>
        <li key={movie.id} className={styles.item}>
            <Link to={{ pathname: `movies/${movie.id}`, state: state }}>
                    {movie.title}</Link>
        </li>
        </>
  )
}

MovieListItem.defaultProps = {
  title: '',
  id: 0,
};

MovieListItem.propTypes = {
    movie: PropTypes.shape({
            title: PropTypes.string,
            id: PropTypes.number,})
};

export default MovieListItem;
