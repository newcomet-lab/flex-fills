import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { throwError } from 'rxjs';
import { tap } from "rxjs/operators";

@Injectable()
export class TradeHistoryService {

  constructor(private http: HttpClient) { }
  baseUrl = 'https://min-api.cryptocompare.com';
  handleError(error : Response) {
    console.error(error);
    return throwError(error);
  }
  
  getBars(symbolInfo: any, resolution: any, from: any, to: any, first: any, limit: any):Observable<any> {
    var split_symbol = symbolInfo.name.split(/[:/]/);
    const url = resolution === 'D' ? '/data/histoday' : parseInt(resolution) >= 60 ? '/data/histohour' : '/data/histominute'
    const qs = {
      e: split_symbol[0],
      fsym: split_symbol[1],
      tsym: split_symbol[2],
      toTs:  to ? to : '',
      limit: limit ? limit : 2000,
      api_key: '2fd2d40469f654d86b28ad9c460633889fd20712168f9e2f7b614797ddb307ab'
    };

    return this.http.get(`${this.baseUrl}${url}`,{params:qs})
      .pipe(
        catchError(this.handleError)
      );
  }

}
