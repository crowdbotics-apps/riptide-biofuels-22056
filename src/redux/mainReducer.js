import { combineReducers } from "redux";

/**
 * You can import more reducers here
 */


//@BlueprintReduxImportInsertion
import CalendarView9164126Reducer from '../features/CalendarView9164126/redux/reducers';
import Dashboard111164124Reducer from '../features/Dashboard111164124/redux/reducers'

export const combinedReducers = combineReducers({
  blank: (state, action) => {
    if (state == null) state = [];
    return state;
  },


  //@BlueprintReduxCombineInsertion
CalendarView9164126: CalendarView9164126Reducer,
Dashboard111164124: Dashboard111164124Reducer,

});