// import { AnyAction, EnhancedStore, Reducer, ReducersMapObject } from "@reduxjs/toolkit";
// import { CombinedState } from "@reduxjs/toolkit/query";
// import { AxiosInstance } from "axios";

// // import { CombinedState } from "redux";

// // import { ArticleDetailsPageSchema } from "@/pages/ArticleDetailsPage";
// // import { ArticlesPageSchema } from "@/pages/ArticlesPage";

// // import { AddCommentFormSchema } from "@/features/addCommentForm";
// // import { LoginSchema } from "@/features/AuthByUsername";
// // import { ProfileSchema } from "@/features/editableProfileCard";
// // import { UISchema } from "@/features/UI";

// // import { ArticleDetailsSchema } from "@/entities/Article";
// // import { CounterSchema } from "@/entities/Counter";
// // import { UserSchema } from "@/entities/User";

// import { rtkApi } from "@/shared/api/rtkApi";

// export interface StateSchema {
// 	// counter: CounterSchema;
// 	// user: UserSchema;
// 	// ui: UISchema;
// 	[rtkApi.reducerPath]: ReturnType<typeof rtkApi.reducer>;

// 	// Асинхронные редюсеры
// 	// loginForm?: LoginSchema;
// 	// profile?: ProfileSchema;
// 	// articleDetails?: ArticleDetailsSchema;
// 	// addCommentForm?: AddCommentFormSchema;
// 	// articlesPage?: ArticlesPageSchema;
// 	// articleDetailsPage?: ArticleDetailsPageSchema;
// }

// export type StateSchemaKey = keyof StateSchema;
// export type MountedReducers = OptionalRecord<StateSchemaKey, boolean>;

// export interface ReducerManager {
// 	getReducerMap: () => ReducersMapObject<StateSchema>;
// 	reduce: (state: StateSchema, action: AnyAction) => CombinedState<StateSchema>;
// 	add: (key: StateSchemaKey, reducer: Reducer) => void;
// 	remove: (key: StateSchemaKey) => void;
// 	// true - вмонтирован, false - демонтирован
// 	getMountedReducers: () => MountedReducers;
// }

// export interface ReduxStoreWithManager extends EnhancedStore<StateSchema> {
// 	reducerManager: ReducerManager;
// }

// export interface ThunkExtraArg {
// 	api: AxiosInstance;
// }

// export interface ThunkConfig<T> {
// 	rejectValue: T;
// 	extra: ThunkExtraArg;
// 	state: StateSchema;
// }
