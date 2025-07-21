
export enum ActionTypes {
  INCREMENT = "INCREMENT",
  DECREMENT = "DECREMENT",
  RESET = "RESET",
  UPDATE_NAME = "UPDATE_NAME",
  UPDATE_AGE = "UPDATE_AGE",
}

export type State = {
  count: number;
  user: {
    name: string;
    age: number;
  };
};

export type Action =
  | { type: ActionTypes.INCREMENT; payload: number }
  | { type: ActionTypes.DECREMENT; payload: number }
  | { type: ActionTypes.RESET }
  | { type: ActionTypes.UPDATE_NAME; payload: string }
  | { type: ActionTypes.UPDATE_AGE; payload: number };

export const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case ActionTypes.INCREMENT:
      return { ...state, count: state.count + action.payload };
    case ActionTypes.DECREMENT:
      return { ...state, count: state.count - action.payload };
    case ActionTypes.RESET:
      return { ...state, count: 0 };
    case ActionTypes.UPDATE_NAME:
      return {
        ...state,
        user: { ...state.user, name: action.payload },
      };
    case ActionTypes.UPDATE_AGE:
      return {
        ...state,
        user: { ...state.user, age: action.payload },
      };
    default:
      return state;
  }
};
