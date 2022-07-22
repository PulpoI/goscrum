import { applyMiddleware, legacy_createStore as createStore } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "@redux-devtools/extension";

import rootReducer from "./reducers/rootReducer";

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

// import { configureStore, applyMiddleware } from "@reduxjs/toolkit";

// import rootReducer from "./reducers/rootReducer";
// import thunk from "redux-thunk";
// import { composeWithDevTools } from "@redux-devtools/extension";

// export const store = configureStore({
//   reducer: {
//     // Define a top-level state field named `todos`, handled by `todosReducer`
//     reducer: rootReducer,
//     filters: composeWithDevTools(applyMiddleware(thunk)),
//   },
// });
