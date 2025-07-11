import { configureStore } from "@reduxjs/toolkit";
import { cakeReducer } from "../features/cake/cakeSlice.js";
import { icecreamReducer } from "../features/icecream/icecreamSlice.js";
// implement redux-logger
import reduxLogger from 'redux-logger';
import { userReducer } from "../features/user/userSlice.js";
const { createLogger } = reduxLogger;
const logger = createLogger();


const store = configureStore({
    reducer: {
        cake: cakeReducer,
        icecream: icecreamReducer,
        user: userReducer
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(logger),
});

export default store;