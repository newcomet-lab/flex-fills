import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  endpoint: string = environment.API_URL;
  headers = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(
    private http: HttpClient,
    public router: Router
  ) {

  }

  getServerInfo() {
    return this.http
      .get<any>(`${this.endpoint}/ui/config`)
      .pipe(map((serverInfo) => serverInfo || {}));
  }
}
