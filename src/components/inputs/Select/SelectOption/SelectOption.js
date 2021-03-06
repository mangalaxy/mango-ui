import React, {useState} from 'react';

function SelectOption(props) {
    const {value, className} = props;
    const [selected, toggleSelected] = useState(false);

    return (
        <div
            className={`select-options__item ${className || ''}`}
            onClick={() => toggleSelected(!selected)}
        >
            <SelectSquare className='select-options__icon' fill={selected ? '#36B3A8' : null} />
            <div className='select-options__value'>{value}</div>
        </div>
    );
}

const SelectSquare = (props) => {
    const {fill, className} = props
    return (
        <svg className={className}
            width="14" height="14" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M16 0H2C0.9 0 0 0.9 0 2V16C0 17.1 0.9 18 2 18H16C17.1 18 18 17.1 18 16V2C18 0.9 17.1 0 16 0ZM7 14L2 9.19231L3.4 7.84615L7 11.3077L14.6 4L16 5.34615L7 14Z"
                  fill={fill || '#FBFBFB'}
                  fill-opacity="0.9"
            />
        </svg>

    )
}

export default SelectOption;