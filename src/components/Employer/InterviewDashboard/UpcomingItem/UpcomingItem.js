import React from 'react';
import Avatar from '../../../Avatar/Avatar'

function UpcomingItem(props) {
    const {interview} = props;
    const {img, name, position, day, time, description} = interview;
    return (
        <div className='upcoming-info'>
            <div className='upcoming-info__item'>
                <div className='upcoming-info__img'>
                    <Avatar
                        img={img}
                        alt={name}
                        size={50}
                    />
                </div>
                <div className='upcoming-info__text'>
                    <div className='upcoming-info__name'>
                        {name}
                    </div>
                    <div className='upcoming-info__position'>
                        {position}
                    </div>
                </div>
            </div>
            <div className='upcoming-info__date'>
                <div className='upcoming-info__day'>{day}</div>
                <div className='upcoming-info__cirle'></div>
                <div className='upcoming-info__time'>{time}</div>
            </div>
            <div className='upcoming-info__description'>
                {description}
            </div>
        </div>
    )
}

export default UpcomingItem;