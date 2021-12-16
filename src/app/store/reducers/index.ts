import { ActionReducerMap } from "@ngrx/store";
import { authReducer, AuthState } from "./auth.reducer";
// import { cartReducer, CartState } from "./cart.reducer";

interface AppState {
  authState: AuthState;
  // cartState: CartState;
}

export const reducers: ActionReducerMap<AppState> = {
  authState: authReducer,
  // cartState: cartReducer
};
