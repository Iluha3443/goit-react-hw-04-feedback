import css from './Statistics.module.css';
import React from 'react';
import PropTypes from 'prop-types';

export const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
    return (
        <>
            <ul className={css.listStatic}>
                <li className={css.static}>good:{good}</li>
                <li className={css.static}>neutral:{neutral}</li>
                <li className={css.static}>bad:{bad}</li>
                <li className={css.static}>Total:{total()}</li>
                <li className={css.static}>Positive feedback:{positivePercentage()}%</li>
            </ul>
        </>
    )
};

Statistics.propTypes = {
    good: PropTypes.number,
    neutral: PropTypes.number,
    bad: PropTypes.number,
    total: PropTypes.func,
    positivePercentage: PropTypes.func,

}