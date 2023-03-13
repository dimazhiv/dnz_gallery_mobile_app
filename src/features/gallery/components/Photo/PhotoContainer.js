import { connect } from 'react-redux';
import { getCurrentPhoto } from '../../selectors';
import Photo from './Photo';

function mapStateToProps(state) {
  return {
    uri: getCurrentPhoto(state)
  };
}

export default connect(mapStateToProps, null)(Photo);
