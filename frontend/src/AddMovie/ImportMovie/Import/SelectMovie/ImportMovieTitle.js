import PropTypes from 'prop-types';
import React from 'react';
import Label from 'Components/Label';
import { kinds } from 'Helpers/Props';
import translate from 'Utilities/String/translate';
import styles from './ImportMovieTitle.css';

function ImportMovieTitle(props) {
  const {
    title,
    year,
    studio,
    isExistingMovie
  } = props;

  return (
    <div className={styles.titleContainer}>
      <div className={styles.title}>
        {title}

        {
          !title.contains(year) &&
            <span className={styles.year}>({year})</span>
        }
      </div>

      {
        !!studio &&
          <Label>{studio}</Label>
      }

      {
        isExistingMovie &&
          <Label
            kind={kinds.WARNING}
          >
            {translate('Existing')}
          </Label>
      }
    </div>
  );
}

ImportMovieTitle.propTypes = {
  title: PropTypes.string.isRequired,
  year: PropTypes.number.isRequired,
  studio: PropTypes.string,
  isExistingMovie: PropTypes.bool.isRequired
};

export default ImportMovieTitle;
