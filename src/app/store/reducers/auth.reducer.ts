import { createReducer, on } from '@ngrx/store';
import { createSelector } from '@ngrx/store';
import { loginSuccessAction } from '../actions/auth.action';

/* State */

export interface AuthState {
  loginInfo: any;
}

/* Reducer */

const initialAuthState: AuthState = {
  loginInfo: null
};

const _authReducer = createReducer(
  initialAuthState,
  on(loginSuccessAction, (state, { payload }) => {
    console.log('loginSuccessAction: ', payload);
    return {
      ...state,
      loginInfo: payload
    };
  })
);

export function authReducer(state: any, action: any) {
  return _authReducer(state, action);
}

/* Selector */

export const selectAuthState = (state: any) => state.authState;
export const selectLoginInfo = createSelector(
  selectAuthState,
  (state: any) => {
    console.log('select Login Info: ', state.loginInfo);
    return state.loginInfo;
  }
);