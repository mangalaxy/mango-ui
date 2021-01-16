import React from 'react';
import '../fieldStyles.scss';
import {MultiSelect} from 'primereact/multiselect';

const FKDropdown = ({
                      options,
                      placeholder = 'Select...',
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
    <div className={`fieldMultiselect`}>
      <MultiSelect
          onChange={e => setFieldValue(name, e.value)}
          onBlur={onBlur(name)}
          value={value}
          options={options}
          placeholder={placeholder}
          display="chip"
      />
      <div className="errorContainer">
        {errors[name] && touched[name] &&
        <span className='errorLabel'>{errors[name]}</span>}
      </div>

    </div>
);

export default FKDropdown;
