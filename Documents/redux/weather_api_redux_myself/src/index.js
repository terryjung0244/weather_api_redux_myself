import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { createStore, applyMiddleware } from "redux";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import createSagaMiddleware from "@redux-saga/core";
import rootSaga from "./service/saga/";
import rootReducer from "./service/store";

const sagaMiddleware = createSagaMiddleware();
const rootNode = document.getElementById("root");
const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);

ReactDOM.createRoot(rootNode).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
