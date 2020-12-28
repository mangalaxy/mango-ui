import React from 'react';
import {NavLink} from 'react-router-dom';
import routes from '../../constants/routes.json';
import search from '../../assets/icons/search.svg';
import moment from 'moment';

const PostList = (props) => {
    const {posts} = props;
    const getDate = date => {
        return moment(date).format('ll');
    };

    return (
        <section className='blog-container'>
            <div className='blog-content'>
                <ul className='blog-list'>
                    {
                        posts.map(post => {
                            return (
                                <li className='blog-item' key={post.id}>
                                    <div className='blog-item__description'>{`${getDate(post.createdDate)} by ${post.author} in interview process`}</div>
                                    <h2 className='blog-item__header'>{post.headline}</h2>
                                    <div className='blog-item__container'>
                                        <div className='blog-item__icon' style={{backgroundImage: `url(${post.imageUrl})`}}></div>
                                        <div className='blog-item__text'>
                                            {post.opening}
                                        </div>
                                    </div>
                                    <div className='blog-item__link'><NavLink to={routes.COMMON.POST + `/${post.id}`}>continue reading</NavLink></div>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
            <div className='blog-sidebar'>
                <form className='search-form'>
                    <input className='search-input' placeholder='Search'/>
                    <span className='search-icon'>
                        <img src={search} alt="search-icon" />
                    </span>
                </form>
                <h2 className='posts-title'>Latest posts</h2>
                <div className='posts-menu'>
                    <ul className='posts-list'>
                        {
                            posts.map(post => {
                                return <li className="posts-list__item" key={post.id}><NavLink to={routes.COMMON.POST + `/${post.id}`}>{post.headline}</NavLink></li>
                            })
                        }
                    </ul>
                </div>
                <h2 className='posts-title'>categories</h2>
                <div className='categories-list'>
                    <ul className='categories-menu'>
                        <li className="posts-list__item">Interview process</li>
                        <li className="posts-list__item">Analytics</li>
                        <li className="posts-list__item">Mango news</li>
                        <li className="posts-list__item">IT</li>
                        <li className="posts-list__item">Hiring</li>
                    </ul>
                </div>
                <h3 className='form-title'>Subscribe to our Newsletter</h3>
                <form className='subscribe-form'>
                    <input className='mail-input' placeholder='Email' type='email'/>
                    <button className='send-btn'>Subscribe</button>
                </form>
            </div>
        </section>
    )
};

export default PostList;