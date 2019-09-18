import React from 'react';
import { PropTypes } from 'prop-types';

class PostsCounter extends React.Component {
  render() {
    const { count } = this.props;
    let number;
    if (count === 0) {
      number = 'No posts';
    } else {
      number = count;
    }
    return <div>Posts amount: {number}</div>;
  }
}
PostsCounter.propTypes = {
  count: PropTypes.number
};

export default PostsCounter;
