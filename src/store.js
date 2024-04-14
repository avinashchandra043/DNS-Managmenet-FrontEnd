import {
  // applyMiddleware,
  createStore,
  // compose
} from "redux";
// import reduxLogger from "redux-logger";
import reducers from "./Reducers/reducers";
import { persistStore } from "redux-persist";

// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// const middleware = [reduxLogger];

export const store = createStore(
  reducers
  // composeEnhancers(applyMiddleware(...middleware))
);

export const persister = persistStore(store);
