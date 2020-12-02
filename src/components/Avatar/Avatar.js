import React from 'react'

import './Avatar.scss'

const Avatar = ({className, img, size, edit}) => {
    return (
        <div className={`avatar ${className}`} style={{ width: size, height: size }}>
            {edit && <div className='avatar__add-photo'>
                <div>Change photo</div>
            </div>}
            <img
                className='avatar__image'
                src={img}
                alt='User avatar'
                style={{ width: size, height: size }}
            />
        </div>
    )
};

export default Avatar