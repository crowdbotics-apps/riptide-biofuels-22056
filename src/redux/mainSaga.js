import { all, takeEvery, take } from "redux-saga/effects";


//@BlueprintReduxSagaImportInsertion
import EmailAuth1164134Saga from '../features/EmailAuth1164134/redux/sagas';
import CalendarView9164126Saga from '../features/CalendarView9164126/redux/sagas';

function* helloSaga() {
  console.log("Hello from saga!");
}

export function* mainSaga() {
  yield all([
    takeEvery("TEST/ALO", helloSaga),
    // other sagas go here


    //@BlueprintReduxSagaMainInsertion
EmailAuth1164134Saga,
CalendarView9164126Saga,
    
  ]);
}