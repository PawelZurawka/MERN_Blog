import { connect } from 'react-redux';
import { getPostsCounter } from '../../../redux/postsRedux';
import PostsCounter from './PostsCounter';

const mapStateToProps = state => ({
  count: getPostsCounter(state)
});

export default connect(mapStateToProps)(PostsCounter);
