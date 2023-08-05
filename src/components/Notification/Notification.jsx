import css from './Notification.module.css';
import React from 'react';
import PropTypes from 'prop-types';

export const Notification = ({ message }) => {

    return (
        <>
            <h4 className={css.notification}>{message}</h4>
        </>
        
    )
};

Notification.propTypes = {
    message: PropTypes.string
}