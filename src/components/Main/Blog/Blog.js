import React, {Fragment, useEffect} from 'react';
import search from '../../../assets/icons/search.svg';
import {getPosts} from '../../../actions/posts';
import {connect} from 'react-redux';
import ReactPaginate from 'react-paginate';
import {NavLink} from 'react-router-dom';
import routes from '../../../constants/routes.json';
import Preloader from '../../Preloader/preloader'
import './Blog.scss';

const elemenstPerPage = 1;

function Blog(props) {
    const {posts, postsLoading, getAllPosts} = props;
    const {content = [], totalPages, number} = posts;
    useEffect(() => {
        getAllPosts(0);
    },[]);

    const changePage = () => {
        getAllPosts(number + 1);
    }

    if (postsLoading) return <Preloader/>

    return (
        <Fragment>
        <section className='blog-header'>
            <h1 className='blog-header__title'>stay up to date with the latest
                news оf hiring</h1>
            <div className='blog-header__image-filter'></div>
        </section>
        <section className='blog-container'>
            <div className='blog-content'>
                <ul className='blog-list'>
                    {
                        content.map(post => {
                            return (
                                <li className='blog-item'>
                                    <div className='blog-item__description'>{`${post.createdDate.slice(0, 10)} by ${post.author} in interview process`}</div>
                                    <h2 className='blog-item__header'>{post.headline}</h2>
                                    <div className='blog-item__container'>
                                        <div className='blog-item__icon' style={{backgroundImage: `url(${post.imageUrl})`}}></div>
                                        <div className='blog-item__text'>
                                            {post.content}
                                        </div>
                                    </div>
                                    <div className='blog-item__link'><NavLink to={routes.COMMON.POST}>continue reading</NavLink></div>
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
                            content.map(post => {
                                return <li className="posts-list__item"><NavLink to={routes.COMMON.POST}>{post.headline}</NavLink></li>
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
            <div className='blog-pagination-container'>
                <ReactPaginate
                    pageCount={totalPages}
                    containerClassName='jobs-pagination'
                    pageClassName='jobs-pagination__item'
                    pageLinkClassName='jobs-pagination__link'
                    activeLinkClassName='jobs-pagination__link--active'
                    onPageChange={() => changePage()}
                    previousLinkClassName='jobs-pagination__link--prev'
                    nextLinkClassName='jobs-pagination__link--next'
                    nextLabel=''
                    previousLabel=''
                />
            </div>
        </Fragment>
    )
}

const mapStateToProps = ({posts}) => {
    return {
        posts: posts.posts,
        postsLoading: posts.postsLoading,
    }
};

const mapDispatchToProps = dispatch => ({
    getAllPosts: (pageNumber, pageSize) => dispatch(getPosts(pageNumber, pageSize))
});

export default connect(mapStateToProps, mapDispatchToProps)(Blog);

