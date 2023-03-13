import DriverInfo from './DriverInfo';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getActiveDriverInfo } from '../../selectors';
import { onDriverNamePress } from '../../sagaActions';

function mapStateToProps(state) {
  const { url, givenName, familyName, dateOfBirth, nationality } = getActiveDriverInfo(state);

  return {
    url,
    fullName: `${givenName} ${familyName}`,
    dateOfBirth,
    nationality
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      onPress: onDriverNamePress
    },
    dispatch
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(DriverInfo);
