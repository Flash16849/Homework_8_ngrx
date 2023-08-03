import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catFact } from '../models/cat.model';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CatFactService {

  constructor(private http: HttpClient) {}

  getFact(maxLength: number, limit: number): Observable<catFact[]> {
    
    return this.http.get<catFact[]>
    (`https://catfact.ninja/facts?${maxLength}&${limit}`);
  }
  
  getImg(limit: number): Observable<any> {
    return this.http.get
    (`https://api.thecatapi.com/v1/images/search?limit=${limit}`);
  }
}
