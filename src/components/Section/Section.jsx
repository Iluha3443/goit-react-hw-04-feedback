import css from './Section.module.css';
import React from 'react';
import PropTypes from 'prop-types';

export const Section = ({ title, children }) => {
    
    return (
        <section>
            <h2 className={css.sectionTitle}>{title}</h2>
            {children}
        </section>
        
    )
};

Section.propTypes = {
    title: PropTypes.string,
    children: PropTypes.object
}