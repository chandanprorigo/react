
import { configureStore } from '@reduxjs/toolkit';
import { combineReducers} from 'redux';
// add logger middleware
import reduxLogger from 'redux-logger';
const { createLogger } = reduxLogger;
const logger = createLogger();

const CAKE_ORDERED = 'CAKE_ORDERED';
const CAKE_RESTOCKED = 'CAKE_RESTOCKED';
const ICECREAM_ORDERED = 'ICECREAM_ORDERED';
const ICECREAM_RESTOCKED = 'ICECREAM_RESTOCKED';
   
function orderCake() {
    return {
        type: CAKE_ORDERED,
        payload: 1,
    }
}

function restockedCake(qty = 1) {
    return {
        type: CAKE_RESTOCKED,
        payload: qty
    }
}

function orderIceCream() {
    return {
        type: ICECREAM_ORDERED,
        payload: 1,
    }
}

function restockedIceCream(qty = 1) {
    return {
        type: ICECREAM_RESTOCKED,
        payload: qty
    }
}

const initialState = {
    numOfCakes: 10,
    numOfIceCreams: 20,
}

const initialCakeState = {
    numOfCakes: 10,
}

const initialIceCreamState = {
    numOfIceCreams: 20,
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case CAKE_ORDERED: 
            return {
                ...state,
                numOfCakes: state.numOfCakes - 1
            }

        case CAKE_RESTOCKED:
            return {
                ...state,
                numOfCakes: state.numOfCakes + action.payload
            }
        case ICECREAM_ORDERED: 
            return {
                ...state,
                numOfIceCreams: state.numOfIceCreams - 1
            }

        case ICECREAM_RESTOCKED:
            return {
                ...state,
                numOfIceCreams: state.numOfIceCreams + action.payload
            }
        default:
            return state;
    } 
}

const cakeReducer = (state = initialCakeState, action) => {
    switch (action.type) {
        case CAKE_ORDERED: 
            return {
                ...state,
                numOfCakes: state.numOfCakes - 1
            }

        case CAKE_RESTOCKED:
            return {
                ...state,
                numOfCakes: state.numOfCakes + action.payload
            }
        default:
            return state;
    } 
}

const iceCreamReducer = (state = initialIceCreamState, action) => {
    switch (action.type) {
        case ICECREAM_ORDERED: 
            return {
                ...state,
                numOfIceCreams: state.numOfIceCreams - 1
            }

        case ICECREAM_RESTOCKED:
            return {
                ...state,
                numOfIceCreams: state.numOfIceCreams + action.payload
            }
        default:
            return state;
    } 
}

// use of combine reducer
const rootReducer = combineReducers({
    cake: cakeReducer,
    iceCream: iceCreamReducer
})

// const store = configureStore({reducer});
const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(logger),
});
console.log('Initial state', store.getState());

// const unsubscribe = store.subscribe(() => console.log('updated state', store.getState()));

// unsubscribe method when using logger
const unsubscribe = store.subscribe(() => {});

store.dispatch(orderCake())
store.dispatch(orderCake())
store.dispatch(orderCake())
store.dispatch(restockedCake(3))

store.dispatch(orderIceCream())
store.dispatch(orderIceCream())
store.dispatch(restockedIceCream(2))

unsubscribe();