import { bindActionCreators, Dispatch } from 'redux';
import { connect } from 'react-redux';
import { RootStateType } from '../../setupStore';
import { setInitialRacesData } from '../../features/racers/slice';
import RacesTable from './RacesTable';

function mapStateToProps(state: RootStateType) {
  return {};
}

function mapDispatchToProps(dispatch: Dispatch) {
  return bindActionCreators(
    {
      onClearRacesData: setInitialRacesData
    },
    dispatch
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(RacesTable);
