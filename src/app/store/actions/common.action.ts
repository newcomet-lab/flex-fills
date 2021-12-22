import { createAction, props } from '@ngrx/store';

export const invokeServerInfoAPI = createAction(
  '[Common API] Invoke Server Info API'
);

export const serverInfoSuccessAction = createAction(
  "[Common API] Server Info API Success",
  props<{ payload: any }>()
);

export const serverInfoFailedAction = createAction(
  "[Common API] Server Info API Failed",
  props<{ payload: any }>()
);