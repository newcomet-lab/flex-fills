import { ActionReducerMap } from "@ngrx/store";
import { authReducer, AuthState } from "./auth.reducer";
import { commonReducer, CommonState } from "./common.reducer";

interface AppState {
  authState: AuthState;
  commonState: CommonState;
}

export const reducers: ActionReducerMap<AppState> = {
  authState: authReducer,
  commonState: commonReducer
};
