import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { BehaviorSubject, Observable, Subject, throwError } from 'rxjs';
import { IHotel } from '../models/hotel';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  private url: string = '/assets/api/data.json';
  private url1: string = '/assets/api/ch.json';
  public customError = {
    status: 500,
    message: 'Sorry! Something went wrong :('
  }
  public selectedRestaurant$ = new BehaviorSubject(null);

  constructor(private httpClient: HttpClient) { }

  public getHotelsList = (): Observable<IHotel[]> => {
    return this.httpClient.get<IHotel[]>(this.url).pipe(
      catchError((err: HttpErrorResponse) => {
        return throwError(err || this.customError);
     
      })
    );
  }

  public getHostel1 = (): Observable<IHotel[]> => {
    return this.httpClient.get<IHotel[]>(this.url1).pipe(
      catchError((err: HttpErrorResponse) => {
        return throwError(err || this.customError);
      })
    );
  }

  public getSelectedRestaurant() {
    return
  }
}
