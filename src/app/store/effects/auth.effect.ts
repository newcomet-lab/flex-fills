import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY, of } from 'rxjs';
import { map, mergeMap, catchError, switchMap } from 'rxjs/operators';
import { AuthService } from '../../services/auth.service';
 
@Injectable()
export class AuthEffect {
  constructor(
    private actions$: Actions,
    private authService: AuthService
  ) {}
 
  /* multiple action on one effect */
  /* mergeMap((data) => [{ 
    type: '[Auth API] Login API Success', 
    payload: data 
  }, { 
    type: '[Auth API] Test', 
    payload: data 
  }]) */

  login$ = createEffect(() =>
  this.actions$.pipe(
      ofType('[Auth API] Invoke Login API'),
      mergeMap((credential) =>
        this.authService
          .login(credential)
          .pipe(
            mergeMap((data) => [{ 
              type: '[Auth API] Login API Success', 
              payload: data 
            }]),
            catchError((err) => of(({ 
              type: '[Auth API] Login API Failed', 
              payload: err 
            })))
          )
      )
    )
  );
}