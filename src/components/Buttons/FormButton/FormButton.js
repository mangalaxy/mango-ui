import React from 'react';
import './FormButton.scss';

const FormButton = props => {
    const {text, className, onClick, type} = props;

    const handleClick = event => {
        event.preventDefault();
        if (onClick) {
            onClick(event);
        }
    };
    return (
        <button
              className={`form-button ${className || ''}`}
              type={type}
              onClick={handleClick}>
            {text}
        </button>
    )
}

export default FormButton;