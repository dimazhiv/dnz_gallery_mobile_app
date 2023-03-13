import DriverItem from './DriverItem';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getDriver } from '../../../selectors';
import { onDriverNamePress, onRacesPress } from '../../../sagaActions';

function mapStateToProps(state, ownProps) {
  const { driverId, url, givenName, familyName, dateOfBirth, nationality } = getDriver(state, ownProps.driverId) || {};

  return {
    driverId,
    url,
    fullName: `${givenName} ${familyName}`,
    dateOfBirth,
    nationality
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      onPress: onDriverNamePress,
      onRacesPress: onRacesPress
    },
    dispatch
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(DriverItem);
