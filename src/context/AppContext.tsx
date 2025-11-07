import { createContext, PropsWithChildren, useMemo, useReducer } from "react";
import { AppState, AppStateType } from "../state";
import { AppAction } from "../actions";
import { AppReducer } from "../reducers";

export type AppDispatchType = (action: AppAction) => void;

const AppContext = createContext<AppStateType>({} as AppStateType);
const AppDispatch = createContext<AppDispatchType>(
  (() => {}) as AppDispatchType
);

const AppContextProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, AppState);
  const providedState = useMemo(() => ({ ...state }), [state]);
  return (
    <AppContext.Provider value={providedState}>
      <AppDispatch.Provider value={dispatch}>{children}</AppDispatch.Provider>
    </AppContext.Provider>
  );
};

export { AppContext, AppDispatch, AppContextProvider };
