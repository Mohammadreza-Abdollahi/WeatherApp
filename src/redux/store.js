import { createStore } from "redux";
import weatherReducer from "./weather/WeatherReducer";
import { applyMiddleware } from "redux";
import { thunk } from "redux-thunk";
import logger from "redux-logger";
import { composeWithDevTools } from "@redux-devtools/extension";

export const store = createStore(weatherReducer , composeWithDevTools(applyMiddleware(thunk , logger)));