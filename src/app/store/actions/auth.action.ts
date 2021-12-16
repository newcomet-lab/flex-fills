import { createAction, props } from '@ngrx/store';

export const invokeLoginAPI = createAction(
  '[Auth API] Invoke Login API',
  props<{ 
    email: any,
    password: any
  }>()
);

export const loginSuccessAction = createAction(
  "[Auth API] Login API Success",
  props<{ payload: any }>()
);

export const loginFailedAction = createAction(
  "[Auth API] Login API Failed",
  props<{ payload: any }>()
);