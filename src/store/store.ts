import { applyMiddleware, createStore, compose } from "redux"
import thunk from "redux-thunk"

import {cardsReducer} from "./reducers/cardsReducer"

export const composeEnhancers =
  (window && (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

export const store = createStore(cardsReducer, composeEnhancers(applyMiddleware(thunk)));

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

