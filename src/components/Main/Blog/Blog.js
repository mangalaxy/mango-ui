import React, {Fragment, useEffect} from 'react';
import {getPosts} from '../../../actions/posts';
import {connect} from 'react-redux';
import ReactPaginate from 'react-paginate';
import Preloader from '../../Preloader/Preloader';
import PostList from '../../../containers/PostList/PostList'
import './Blog.scss';

function Blog(props) {
    const {posts, postsLoading, getAllPosts} = props;
    const {content = [], totalPages, number} = posts;
    useEffect(() => {
        getAllPosts(0);
    },[]);

    const changePage = () => {
        getAllPosts(number + 1);
    };

    if (postsLoading) return <Preloader/>

    return (
        <Fragment>
            <section className='blog-header'>
                <h1 className='blog-header__title'>stay up to date with the latest
                    news оf hiring</h1>
                <div className='blog-header__image-filter'></div>
            </section>
            <PostList posts={content}/>
            <div className='blog-pagination-container'>
                <ReactPaginate
                    pageCount={totalPages || 0}
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

