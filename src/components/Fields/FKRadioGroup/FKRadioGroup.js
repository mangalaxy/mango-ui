import React from 'react';
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
                inputId={name+index}
                onChange={e => setFieldValue(name, e.value)}
                value={item.value}
                checked={value===item.value}
            />
            <label htmlFor={name+index}>{item.label}</label>
          </div>)
      }

      <div className="errorContainer">
        {errors[name] &&
        <span className='errorLabel'>{errors[name]}</span>}
      </div>

    </div>
);

export default FKRadioGroup;
