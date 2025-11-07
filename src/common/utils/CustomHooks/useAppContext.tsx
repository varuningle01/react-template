import { useCallback } from "react";
import { AppContext, AppDispatch } from "../../../context";
import { AppContextHookReturnType } from "../../../state";
import { useAppDispatch, useAppState } from "../../context/contextVars";
import { AppActionType } from "../../../actions";

export const useAppContext: () => AppContextHookReturnType = () => {
  const appState = useAppState(AppContext);
  const appDispatch = useAppDispatch(AppDispatch);

  const updateState = useCallback(
    (actionType: any) => (data: any) => {
      appDispatch({
        type: actionType,
        payload: data,
      });
    },
    []
  );

  const actionList = {
    updateCount: updateState(AppActionType.UPADTE_COUNT),
    updateText: updateState(AppActionType.UPADTE_TEXT),
  };

  return {
    appState,
    ...actionList,
  };
};
