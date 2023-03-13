import { bindActionCreators, Dispatch } from 'redux';
import { connect } from 'react-redux';
import { getCurrentPageDriverIds } from '../../selectors';
import DriversList from './DriversList';
import { RootStateType } from '../../../../setupStore';

function mapStateToProps(state: RootStateType) {
  return {
    driversIds: getCurrentPageDriverIds(state)
  };
}

function mapDispatchToProps(dispatch: Dispatch) {
  return bindActionCreators({}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(DriversList);
