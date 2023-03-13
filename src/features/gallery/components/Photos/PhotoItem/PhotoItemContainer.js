import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PhotoItem from './PhotoItem';
import { onPhotoPress } from '../../../sagaActions';

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      onPress: onPhotoPress
    },
    dispatch
  );
}

export default connect(null, mapDispatchToProps)(PhotoItem);
