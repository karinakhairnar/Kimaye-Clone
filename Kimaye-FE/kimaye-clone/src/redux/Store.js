import { legacy_createStore as createStore, combineReducers } from "redux";
import { AllProductReducer } from "./allProductsRedux/AllProductReducer";

const rootReducer = combineReducers({ AllProductReducer });

export const store = createStore(rootReducer);
