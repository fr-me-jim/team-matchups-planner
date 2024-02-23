import { configureStore } from "@reduxjs/toolkit";

// root reducer
import rootReducer from "src/redux/reducers/index.reducer";

const initialState = {};

const store = configureStore({
	reducer: rootReducer,
	preloadedState: initialState,
	middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});

export default store;
