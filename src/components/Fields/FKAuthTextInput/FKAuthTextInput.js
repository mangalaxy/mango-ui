import React, {useState} from 'react';
import '../fieldStyles.scss';
import eye from '../../../assets/icons/eye.svg';

const FKAuthTextInput = ({
                           placeholder,
                           label,
                           defaultValue,
                           inputClassName,
                           containerClassName,
                           secure,
                           focused,
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
                         }) => {
  const [show, setShow] = useState(!secure);

  return (
      <div className={`${containerClassName} fkAuthInput`}>
        <span className="input-label">
        <label htmlFor="in">{label}</label>
        </span>
        <div className="inputContainer">
          <input
              className={inputClassName}
              onChange={e => setFieldValue(name, e.target.value)}
              onBlur={onBlur(name)}
              defaultValue={defaultValue}
              value={value}
              type={show ? 'text' : 'password'}
              autoFocus={focused}
              placeholder={placeholder}
          />
          {secure && <img src={eye} alt="" className='eyeIcon'
                          onMouseDown={() => setShow(true)}
                          onMouseUp={() => setShow(false)}/>}
        </div>
        <div className="errorContainer">
        <span className='errorLabel'>{errors[name] && touched[name] ?
            errors[name] :
            ' '}</span>
        </div>
      </div>
  );
};

export default FKAuthTextInput;
