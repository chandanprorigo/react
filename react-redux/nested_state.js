import { createStore } from 'redux';
import { produce } from 'immer';

const initialState = {
    name: 'Prorigo',
    address: {
        street: '123 Main St',
        city: 'Boston',
        state: 'MA'
    },
}

const STREET_UPDATED = 'STREET_UPDATED';

const updateStreet = (street) => {
    return {
        type: STREET_UPDATED,
        payload: street
    }
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case STREET_UPDATED:
            // return {
            //     ...state,
            //     address: {
            //         ...state.address,
            //         street: action.payload
            //     }
            // }
            return produce(state, (draft) => {
                draft.address.street = action.payload;
            })
        default:
            return state;
    }
}

const store = createStore(reducer);

console.log('Initial state', store.getState());

const unsubscribe = store.subscribe(() => console.log('updated state', store.getState()))

store.dispatch(updateStreet('256 Main St'))

unsubscribe();