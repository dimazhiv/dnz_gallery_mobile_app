import { bindActionCreators, Dispatch } from 'redux';
import { connect } from 'react-redux';
import DriversTable from './DriversTable';
import { showPrevButton } from '../../features/racers/selectors';
import { onNextPagePress, onPrevPagePress } from '../../features/racers/sagaActions';
import { RootStateType } from '../../setupStore';

function mapStateToProps(state: RootStateType) {
  return {
    showPrevButton: showPrevButton(state)
  };
}

function mapDispatchToProps(dispatch: Dispatch) {
  return bindActionCreators(
    {
      onPrevPagePress: onPrevPagePress,
      onNextPagePress: onNextPagePress
    },
    dispatch
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(DriversTable);
