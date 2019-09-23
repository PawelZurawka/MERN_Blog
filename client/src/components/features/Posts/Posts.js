import React from 'react';
import { PropTypes } from 'prop-types';
import PostsList from '../PostsList/PostsList';
import Spinner from '../../common/Spinner/Spinner';
import Alert from '../../common/Alert/Alert';
import Pagination from '../../common/Pagination/Pagination';

class Posts extends React.Component {
  componentDidMount() {
    const { loadPostsByPage, initialPage, postsPerPage } = this.props;
    loadPostsByPage(initialPage, postsPerPage);
  }

  componentWillUnmount() {
    const { resetRequest } = this.props;
    resetRequest();
  }

  loadPostsPage = page => {
    const { loadPostsByPage, postsPerPage } = this.props;
    loadPostsByPage(page, postsPerPage);
  };

  render() {
    const { posts, request, pages, pagination, presentPage } = this.props;
    const { loadPostsPage } = this;

    if (
      request.pending === false &&
      request.success === true &&
      posts.length > 0 &&
      pagination === true
    ) {
      return (
        <>
          <PostsList posts={posts} />
          <Pagination
            pages={pages}
            onPageChange={loadPostsPage}
            initialPage={presentPage}
          />
        </>
      );
    } else if (
      request.pending === false &&
      request.success === true &&
      posts.length > 0 &&
      pagination === false
    ) {
      return (
        <>
          <PostsList posts={posts} />
        </>
      );
    } else if (request.pending === false && request.error != null) {
      return <Alert variant='error'>{request.error}</Alert>;
    } else if (
      request.pending === false &&
      request.success === true &&
      posts.length === 0
    ) {
      return <Alert variant='info'>No posts</Alert>;
    } else if (request.pending === true || request.success === null) {
      return <Spinner />;
    } else {
      return <Alert variant='info'>Something went wrong!</Alert>;
    }
  }
}

Posts.propTypes = {
  posts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired
    })
  ),
  resetRequest: PropTypes.func.isRequired,
  loadPostsByPage: PropTypes.func.isRequired
};

Posts.defaultProps = {
  initialPage: 1,
  postsPerPage: 10,
  pagination: true
};

export default Posts;
