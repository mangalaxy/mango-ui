import React, {useState} from 'react';

function RoleCategory(props) {
    const {category} = props;
    const [selected, setSelected] = useState(false);
    const click = (e) => {
        e.preventDefault();
        setSelected(!selected);
    }

    return (
        <div className='job-role__category'
                onClick={click}
        >
            <div className='job-role__text'>{category}</div>
            <div className={`job-role__checked-box ${selected && 'job-role__checked-box--selected'}`}></div>
        </div>
    )
}

export default RoleCategory;