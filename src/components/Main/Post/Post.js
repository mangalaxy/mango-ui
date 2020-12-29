import React, {useEffect} from 'react';
import ReactMarkdown from 'react-markdown'
import {facebook, like, twitter} from "../../../assets/icons";
import SvgIcon from '../../../components/SvgIcon/SvgIcon';
import PostItem from './PostItem/PostItem'
import {mockPosts} from '../../../mocks/posts';
import {Link} from 'react-router-dom'
import routes from '../../../constants/routes.json';
import {getPostById} from '../../../actions/posts';
import {connect} from 'react-redux';
import Preloader from '../../Preloader/Preloader';
import moment from 'moment';
import './Post.scss'

const Post = (props) => {
  const {postById, postByIdLoading, getPost} = props;
  const id = props.match.params.id;

    const formatDate = date => {
        return moment(date).format('DD MMMM, YYYY');
    };

  useEffect(() => {
    getPost(id);
  }, []);

  if (postByIdLoading) return <Preloader/>;

  return (
        <div className='info'>
          <div className='info__container'>
            <div className='info__bread-crumbs'>
              <p><Link to={routes.COMMON.BLOG}>Blog</Link> > {postById.headline}</p>
            </div>
            <h1 className='info__title'>{postById.headline}</h1>
            <div className='info__main-photo'>
              <img className='info-main-img'
                   src={postById.imageUrl}
                   alt='Preview'/>
            </div>
            <div className="info__description"><span className="date-highlight">{formatDate(postById.createdDate)}</span> {" by "}
            <span className="author-highlight">{postById.author}</span>{ " in "}
              <Link to={'/interview-process'} className='info-description-link'>Interview process</Link>
            </div>
            <div className='info__content'>
              <div className='info__text'>
                <ReactMarkdown>{postById.content}</ReactMarkdown>
                <div className='info__bottom-sidebar'>
                  <div className='info__bottom-item'><SvgIcon className='info__sidebar-item' type={like()}/></div>
                  <div className='info__bottom-item'><SvgIcon className='info__sidebar-item' type={twitter()}/></div>
                  <div className='info__bottom-item'><SvgIcon className='info__sidebar-item' type={facebook()}/></div>
                </div>
              </div>
            </div>
            <div className='info__similar-list'>
              <div className="info__list-description">Similar articles:</div>
              <div className='info-list'>
                {mockPosts.map(post => <PostItem key={post.id} post={post}/>)}
              </div>
            </div>
          </div>
        </div>
  )
};

const mapStateToProps = ({posts}) => {
    return {
        postById: posts.postById,
        postByIdLoading: posts.postByIdLoading,
    }
};

const mapDispatchToProps = dispatch => ({
    getPost: id => dispatch(getPostById(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(Post);