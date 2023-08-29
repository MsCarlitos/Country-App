import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, map, of } from 'rxjs';

import { Countries } from '../interfaces/countries.interface';

@Injectable({providedIn: 'root'})
export class CountriesService {

  private apiUrl:string = 'https://restcountries.com/v3.1'

  constructor(private http: HttpClient) { }

  searchCapital( term: string ): Observable<Countries[]> {
    const url: string = `${this.apiUrl}/capital/${term}`;
    return this.http.get<Countries[]>( url ).pipe(
      catchError(error => of([]))
    )
  }

  searchCountry(term: string): Observable<Countries[]>{
    const url: string = `${this.apiUrl}/name/${term}`;
    return this.http.get<Countries[]>( url ).pipe(
      catchError(error => of([]))
    )
  }

  searchRegion(region: string): Observable<Countries[]>{
    const url: string = `${this.apiUrl}/region/${region}`;
    return this.http.get<Countries[]>( url ).pipe(
      catchError(error => of([]))
    )
  }

  searchCountryByAlphaCode(code: string): Observable<Countries | null> {
    const url: string = `${this.apiUrl}/alpha/${code}`;
    return this.http.get<Countries[]>( url )
      .pipe(
        map(countries => countries.length > 0 ? countries[0] : null ),
        catchError(error => of(null))
      )
  }

}
