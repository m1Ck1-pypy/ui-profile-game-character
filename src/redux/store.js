import { configureStore } from "@reduxjs/toolkit";
import globalReduser from "./state";
import { setupListeners } from "@reduxjs/toolkit/query";
import { api } from "../api/api";

/* Создание store для передачи его в Provider main.jsx */
export const store = configureStore({
    reducer: {
        global: globalReduser,
        [api.reducerPath]: api.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }).concat(api.middleware),
});

setupListeners(store.dispatch);
