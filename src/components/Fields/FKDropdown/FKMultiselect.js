import React from 'react';
import '../fieldStyles.scss';
import {MultiSelect} from 'primereact/multiselect';

const FKDropdown = ({
                      options,
                      placeholder = 'Select...',
                      chip = false,
                      showHeader = false,
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
    <div className={showHeader ? `fieldMultiselect`: `fieldMultiselect noHeader`}>
      <MultiSelect
          onChange={e => setFieldValue(name, e.value)}
          onBlur={onBlur(name)}
          value={value}
          options={options}
          placeholder={placeholder}
          display={chip ? 'chip' : 'none'}
          filter
      />
      <div className="errorContainer">
        {errors[name] && touched[name] &&
        <span className='errorLabel'>{errors[name]}</span>}
      </div>

    </div>
);

export default FKDropdown;
