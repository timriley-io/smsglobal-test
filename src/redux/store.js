import { createStore } from "redux";
import { reducer } from "./reducers";

export const store = createStore(
    reducer,
    // Love the Redux devtools extension
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);