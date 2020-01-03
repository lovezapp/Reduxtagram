import React from 'react';
import Photo from './Photo';
import Comments from './Comments';

const Single = React.createClass({
    
  render() {
    const { posts, params } = this.props;
    const findPostIndex = (post) => post.code === params.photoId;
    const i = posts.findIndex(findPostIndex);
    const post = posts[i];
    const postComments = this.props.comments[params.photoId] || [];
    return(
      <div className="single-photo">
        <Photo {...this.props} i={i} post={post} /> 
        <Comments postComments={postComments} {...this.props} />
      </div>
    )
  }
});

export default Single;