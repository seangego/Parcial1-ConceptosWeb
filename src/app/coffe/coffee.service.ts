import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Coffee } from './Coffe';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CoffeeService {

  private apiUrl: string = environment.baseUrl;
  constructor(private http: HttpClient) { }
  getCoffees(): Observable<Coffee[]> {
    return this.http.get<Coffee[]>(this.apiUrl);
  }

}
