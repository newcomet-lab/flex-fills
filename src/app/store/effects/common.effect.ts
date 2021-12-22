import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY, of } from 'rxjs';
import { map, mergeMap, catchError, switchMap } from 'rxjs/operators';
import { CommonService } from '../../services/common.service';
 
@Injectable()
export class CommonEffect {
  constructor(
    private actions$: Actions,
    private commonService: CommonService
  ) {}

  getServerInfo$ = createEffect(() =>
  this.actions$.pipe(
      ofType('[Common API] Invoke Server Info API'),
      mergeMap(() =>
        this.commonService
          .getServerInfo()
          .pipe(
            mergeMap((data) => [{ 
              type: '[Common API] Server Info API Success', 
              payload: data 
            }]),
            catchError((err) => of(({ 
              type: '[Common API] Server Info API Failed', 
              payload: err 
            })))
          )
      )
    )
  );
}