import React from 'react';

const PostItem = (props) => {
    const {post} = props;
    const {img, tag, title} = post;

    return (
        <div className='info-list__item'>
            <div className='info-photo'>
                <img className='info-photo__img' src={img} alt="Post splash"/>
            </div>
            <div className='info__tag'>{tag}</div>
            <div className='info__subtitle'>{title}</div>
        </div>
    )
}

export default PostItem;