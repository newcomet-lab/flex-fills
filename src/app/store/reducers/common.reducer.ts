import { createReducer, on } from '@ngrx/store';
import { createSelector } from '@ngrx/store';
import { serverInfoSuccessAction } from '../actions/common.action';

/* State */

export interface CommonState {
  serverInfo: any;
}

/* Reducer */

const initialCommonState: CommonState = {
  serverInfo: null
};

const _commonReducer = createReducer(
  initialCommonState,
  on(serverInfoSuccessAction, (state, { payload }) => {
    console.log('serverInfoSuccessAction: ', payload);
    return {
      ...state,
      serverInfo: payload
    };
  })
);

export function commonReducer(state: any, action: any) {
  return _commonReducer(state, action);
}

/* Selector */

export const selectCommonState = (state: any) => state.commonState;
export const selectServerInfo = createSelector(
  selectCommonState,
  (state: any) => {
    console.log('select Server Info: ', state.serverInfo);
    return state.serverInfo;
  }
);