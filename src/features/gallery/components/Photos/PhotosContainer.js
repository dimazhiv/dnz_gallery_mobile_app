import { connect } from 'react-redux';
import { getPhotosUri } from '../../selectors';
import Photos from './Photos';

function mapStateToProps(state) {
  return {
    uris: getPhotosUri(state)
  };
}

export default connect(mapStateToProps, null)(Photos);
