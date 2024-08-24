import { createStore } from "redux";
import weatherReducer from "./weather/WeatherReducer";
import { applyMiddleware } from "redux";
import { thunk } from "redux-thunk";
import logger from "redux-logger";
import { composeWithDevTools } from "@redux-devtools/extension";
import createSagaMiddleware from "@redux-saga/core";
import { weatherWatcher } from "./weather/WeatherActions";

const saga = createSagaMiddleware()

export const store = createStore(weatherReducer , composeWithDevTools(applyMiddleware(saga)));

saga.run(weatherWatcher)