import React from 'react';
import {Chips} from 'primereact/chips';
import '../fieldStyles.scss';

const FKChipsInput = ({
                        placeholder,
                        inputClassName,
                        containerClassName,
                        disabled,
                        field: {
                          name,
                          onBlur,
                          value,
                        },
                        form: {
                          errors,
                          touched,
                          setFieldValue,
                        },
                      }) => (
    <div className={`${containerClassName ? containerClassName : ''} fkChips`}>
      <Chips
          className={inputClassName}
          onChange={e => setFieldValue(name, e.target.value)}
          onBlur={onBlur(name)}
          value={value}
          allowDuplicate={false}
          disabled={disabled}
      />
      <label htmlFor="in">{placeholder}</label>
      <div className="errorContainer">
        {errors[name] && touched[name] &&
        <span className='errorLabel'>{errors[name]}</span>}
      </div>

    </div>
);

export default FKChipsInput;
