import { combineReducers  } from 'redux';
import Artists from './artists_reducer';
import AddDelete from './addDelete_Reducer'

const RootReducer = combineReducers({
    Artists,
    AddDelete
});

export default RootReducer;