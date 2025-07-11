import store from "./app/store.js";
import { cakeActions } from "./features/cake/cakeSlice.js";
import { icecreamActions } from "./features/icecream/icecreamSlice.js";
import { fetchUsers } from "./features/user/userSlice.js";

console.log("initial State", store.getState());

// const unsubscribe = store.subscribe(() => {
//     console.log('Updated State: ', store.getState());
// })

// using redux-logger
const unsubscribe = store.subscribe(() => {});

 store.dispatch(cakeActions.ordered())
 store.dispatch(cakeActions.ordered())
 store.dispatch(cakeActions.ordered())
 store.dispatch(cakeActions.restocked(3))

 store.dispatch(icecreamActions.ordered())
 store.dispatch(icecreamActions.ordered())
 store.dispatch(icecreamActions.restocked(2))

 store.dispatch(fetchUsers())

unsubscribe();

