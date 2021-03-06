import React from 'react';
import '../fieldStyles.scss';
import {Dropdown} from 'primereact/dropdown';

const FKDropdown = ({
                      options,
                      placeholder='Select...',
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
    <div className={`fieldDropdown`}>
      <Dropdown
          onChange={e => setFieldValue(name, e.value)}
          onBlur={onBlur(name)}
          value={value}
          options={options}
          placeholder={placeholder}
      />
      <div className="errorContainer">
        {errors[name] && touched[name] &&
        <span className='errorLabel'>{errors[name]}</span>}
      </div>

    </div>
);

export default FKDropdown;
