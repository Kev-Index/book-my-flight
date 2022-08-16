import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Flight } from '../model/flight.model';

@Injectable({
  providedIn: 'root'
})
export class FlightService {

  searchApi: string;

  constructor(private http: HttpClient) {
    this.searchApi = environment.serverUrl + 'flights/search/';
  }

  searchFlights(source: string, destination: string, departureDate: string):Observable<Flight[]> {
    return this.http.get<Flight[]>(this.searchApi+source+"/"+destination+"/"+departureDate);
  }
}
