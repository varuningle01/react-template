import { error } from "console";
import { AppAction, AppActionType } from "../actions";
import { AppStateType } from "../state";

const AppReducer = (state: AppStateType, action: AppAction): AppStateType => {
  switch (action.type) {
    case AppActionType.UPADTE_COUNT: {
      return {
        ...state,
        count: state.count + 1,
      };
    }
    case AppActionType.UPADTE_TEXT: {
      return {
        ...state,
        text: action.payload.text,
      };
    }
    default:
      throw new Error("Unrecognized App Event");
  }
};

export { AppReducer };
