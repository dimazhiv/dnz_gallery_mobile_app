import { bindActionCreators, Dispatch } from 'redux';
import { connect } from 'react-redux';
import { getRaces, isRacesDataLoadFailed, showRacesLoading } from '../../selectors';
import RacesList from './RacesList';
import { RootStateType } from '../../../../setupStore';

function mapStateToProps(state: RootStateType) {
  return {
    races: getRaces(state),
    showRacesLoading: showRacesLoading(state),
    racesDataLoadFailed: isRacesDataLoadFailed(state)
  };
}

function mapDispatchToProps(dispatch: Dispatch) {
  return bindActionCreators({}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(RacesList);
