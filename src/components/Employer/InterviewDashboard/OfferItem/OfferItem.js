import React from 'react';
import Avatar from '../../../Avatar/Avatar';
import InterviewBurgerMenu from '../InterviewBurgerMenu/InterviewBurgerMenu';

const OfferItem = ({offer}) => {
    const {img, name, position, description} = offer;
    return (
        <div className='interview-offers__item'>
            <div className='interview-offers__container'>
                <div className='offer-talent-info'>
                    <Avatar img={img} size={50} />
                    <div className='offer-talent-info__text'>
                        <div className='offer-talent-info__name'>
                            {name}
                        </div>
                        <div className='offer-talent-info__position'>
                            {position}
                        </div>
                    </div>
                </div>
                <InterviewBurgerMenu/>
            </div>
            <div className='offer-talent-description'>
                {description}
            </div>
        </div>
    )
}

export default OfferItem;