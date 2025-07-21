import {
  createContext,
  useReducer,
  ReactNode,
  useContext,
} from "react";
import { reducer, State, ActionTypes } from "./reducer";

type UserContextType = {
  state: State;
  increment: (value: number) => void;
  decrement: (value: number) => void;
  reset: () => void;
  updateName: (name: string) => void;
  updateAge: (age: number) => void;
};

export const initialState: State = {
  count: 0,
  user: {
    name: "Prorigo",
    age: 30,
  },
};

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const increment = (value: number) => {
    dispatch({ type: ActionTypes.INCREMENT, payload: value });
  };

  const decrement = (value: number) => {
    dispatch({ type: ActionTypes.DECREMENT, payload: value });
  };

  const reset = () => {
    dispatch({ type: ActionTypes.RESET });
  };

  const updateName = (name: string) => {
    dispatch({ type: ActionTypes.UPDATE_NAME, payload: name });
  };

  const updateAge = (age: number) => {
    dispatch({ type: ActionTypes.UPDATE_AGE, payload: age });
  };

  return (
    <UserContext.Provider
      value={{ state, increment, decrement, reset, updateName, updateAge }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUserContext must be used within a UserProvider");
  }
  return context;
};
