import React from 'react';
import { PropTypes } from 'prop-types';
import Spinner from '../../common/Spinner/Spinner';
import Alert from '../../common/Alert/Alert';
import HtmlBox from '../../common/HtmlBox/HtmlBox';
import SmallTitle from '../../common/SmallTitle/SmallTitle';
import { withRouter } from 'react-router-dom';

class SinglePost extends React.Component {
  componentDidMount() {
    const { loadPost, match } = this.props;
    loadPost(match.params.id);
  }

  render() {
    const { post, request } = this.props;

    if (
      request.pending === false &&
      request.success === true &&
      post !== null
    ) {
      return (
        <article>
          <SmallTitle>{post.title}</SmallTitle>
          <HtmlBox>{post.content}</HtmlBox>
        </article>
      );
    } else if (request.pending === true || request.success === null) {
      return <Spinner />;
    } else if (request.pending === false && request.error !== null) {
      return <Alert variant='error'>{request.error}</Alert>;
    } else if (request.pending === false && request.success === true) {
      return <Alert variant='info'>No posts</Alert>;
    } else {
      return <Alert variant='info'>Something went wrong!</Alert>;
    }
  }
}

SinglePost.propTypes = {
  posts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired
    })
  ),
  loadPost: PropTypes.func.isRequired
};

export default withRouter(props => <SinglePost {...props} />);
