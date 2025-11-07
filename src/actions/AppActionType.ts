import { AppActionType } from "./AppActionType.enum";

export type AppAction =
  | {
      type: AppActionType.UPADTE_COUNT;
    }
  | {
      type: AppActionType.UPADTE_TEXT;
      payload: {
        text: string;
      };
    };
