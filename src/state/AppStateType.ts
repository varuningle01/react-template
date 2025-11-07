export interface AppStateType {
  count: number;
  text: string;
}

export type AppContextHookReturnType = {
  appState: AppStateType;
  updateCount: (data: any) => void;
  updateText: (data: any) => void;
};
