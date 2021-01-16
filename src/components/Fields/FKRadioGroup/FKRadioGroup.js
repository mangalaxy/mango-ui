import React, {useState} from 'react';
import {RadioButton} from 'primereact/radiobutton';
import '../fieldStyles.scss';

const FKRadioGroup = ({
                        options = [],
                        field: {
                          name,
                          value,
                        },
                        form: {
                          errors,
                          setFieldValue,
                        },
                      }) => (
    <div className={`fieldRadioGroup`}>
      {options.map((item, index) =>
          <div className="radiobutton" key={index}>
            <RadioButton
                inputId={item}
                onChange={e => setFieldValue(name, e.value)}
                value={item}
                checked={value===item}
            />
            <label htmlFor={item}>{item}</label>
          </div>)
      }

      <div className="errorContainer">
        {errors[name] &&
        <span className='errorLabel'>{errors[name]}</span>}
      </div>

    </div>
);

export default FKRadioGroup;
