import React from 'react';
import PropTypes from 'prop-types';
import styles from './CastItem.module.css';

function CastItem({credit}) {
    return (
    <>
        <li className={styles.item} key={credit.id}>
          <img className={styles.img} src={`https://image.tmdb.org/t/p/w500/${credit.profile_path}?api_key=892c9b9f1c704261a0f515abd746d990`} alt={credit.name} />
          <div className={styles.name}>{credit.name}</div>
          <div className={styles.character}>Character: {credit.character}</div>
          <hr/>
        </li>
    </>
  )
}

CastItem.defaultProps = {
   img: '',
};
CastItem.propTypes = {
  credit: PropTypes.shape({
    name: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    img: PropTypes.string,
    character: PropTypes.string.isRequired,
    }),
};

export default CastItem;