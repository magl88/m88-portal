import { combineReducers, configureStore, ConfigureStoreOptions } from "@reduxjs/toolkit";

import { rtkApi } from "@/shared/api";

const rootReducer = combineReducers({
	[rtkApi.reducerPath]: rtkApi.reducer,
});

export const setupStore = (
	options?: ConfigureStoreOptions["preloadedState"] | undefined,
) => {
	return configureStore({
		reducer: rootReducer,
		middleware: (getDefaultMiddleware) =>
			getDefaultMiddleware().concat(rtkApi.middleware),
		...options,
	});
};

export const storeConfig = setupStore();

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];
