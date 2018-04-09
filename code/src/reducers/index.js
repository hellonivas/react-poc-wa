import { combineReducers  } from 'redux';
import Artists from './artists_reducer';

const RootReducer = combineReducers({
    Artists
});

export default RootReducer;