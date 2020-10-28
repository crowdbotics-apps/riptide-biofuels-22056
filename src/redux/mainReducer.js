import { combineReducers } from "redux";

/**
 * You can import more reducers here
 */


//@BlueprintReduxImportInsertion
import EmailAuth1164134Reducer from '../features/EmailAuth1164134/redux/reducers';
import CalendarView9164126Reducer from '../features/CalendarView9164126/redux/reducers';
import Dashboard111164124Reducer from '../features/Dashboard111164124/redux/reducers'

export const combinedReducers = combineReducers({
  blank: (state, action) => {
    if (state == null) state = [];
    return state;
  },


  //@BlueprintReduxCombineInsertion
EmailAuth1164134: EmailAuth1164134Reducer,
CalendarView9164126: CalendarView9164126Reducer,
Dashboard111164124: Dashboard111164124Reducer,

});