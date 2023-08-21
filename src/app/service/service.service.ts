// import { Injectable } from '@angular/core';
// import { HttpClient, HttpErrorResponse } from '@angular/common/http';
// import { Observable, Subject, throwError } from 'rxjs';
// import { IHotel } from '../models/hotel';
// import { catchError } from 'rxjs/operators';

// @Injectable({
//   providedIn: 'root'
// })
// export class ServiceService {

//   private url: string = '/assets/api/data.json';
//   private url1: string = '/assets/api/chennai.json';
//   private url2: string = '/assets/api/noida.json';
//   private url3: string = '/assets/api/hyd.json';
//   public customError = {
//     status: 500,
//     message: 'Sorry! Something went wrong :('
//   }

//   constructor(private httpClient: HttpClient) { }

//   public getHotelsBanglore = (): Observable<IHotel[]> => {
//     return this.httpClient.get<IHotel[]>(this.url).pipe(
//       catchError((err: HttpErrorResponse) => {
//         return throwError(err || this.customError);
//       })
//     );
//   }

//   public getHostelsChennai = (): Observable<IHotel[]> => {
//     return this.httpClient.get<IHotel[]>(this.url1).pipe(
//       catchError((err: HttpErrorResponse) => {
//         return throwError(err || this.customError);
//       })
//     );
//   }
//   public getHotelsNoida = (): Observable<IHotel[]> => {
//     return this.httpClient.get<IHotel[]>(this.url2).pipe(
//       catchError((err: HttpErrorResponse) => {
//         return throwError(err || this.customError);
//       })
//     );
//   }

//   public getHostelshyd = (): Observable<IHotel[]> => {
//     return this.httpClient.get<IHotel[]>(this.url3).pipe(
//       catchError((err: HttpErrorResponse) => {
//         return throwError(err || this.customError);
//       })
//     );
//   }
// }
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
  private url1: string = '/assets/api/chennai.json';
  private url2: string = '/assets/api/hyd.json'
  private url3: string = '/assets/api/noida.json'
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

  public getHostelChennai = (): Observable<IHotel[]> => {
    return this.httpClient.get<IHotel[]>(this.url1).pipe(
      catchError((err: HttpErrorResponse) => {
        return throwError(err || this.customError);
      })
    );
  }
  public getHotelsNoida = (): Observable<IHotel[]> => {
    return this.httpClient.get<IHotel[]>(this.url2).pipe(
      catchError((err: HttpErrorResponse) => {
        return throwError(err || this.customError);
      })
    );
  }
  public getHotelshyd = (): Observable<IHotel[]> => {
    return this.httpClient.get<IHotel[]>(this.url3).pipe(
      catchError((err: HttpErrorResponse) => {
        return throwError(err || this.customError);
      })
    );
  }

  public getSelectedRestaurant() {
    return
  }
}



