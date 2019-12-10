import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
import { User } from './user-data';

@Injectable()
export class UserDataService {

    apiurl = 'api/users';                 // Our created Data can be accessed here at api/users
    headers = new HttpHeaders().set('Content-Type', 'application/json').set('Accept', 'application/json');
    httpOptions = {
        headers: this.headers
    };

    constructor(private http: HttpClient) { }                     //Injecting HTTP service to communicate with the data

    private handleError(error: any) {
        console.error(error);                                       //Created a function to handle and log errors, in case
        return throwError(error);
    }

    getUsers(): Observable<User[]> {
        return this.http.get<User[]>(this.apiurl).pipe(
            tap(data => console.log(data)),
            catchError(this.handleError)
        );
    }
}