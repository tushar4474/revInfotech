import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http:HttpClient) { }

  getData():Observable<any>{
     const url = 'https://vast-shore-74260.herokuapp.com/banks?city=MUMBAI';
     return this.http.get<any>(url);
  }

  getDataofCity2():Observable<any>{
    const url = 'https://vast-shore-74260.herokuapp.com/banks?';
    return this.http.get<any>(url+'city=PUNE');
 }

 getDataofCity3():Observable<any>{
  const url = 'https://vast-shore-74260.herokuapp.com/banks?';
  return this.http.get<any>(url+'city=MUMBAI');
}

getDataofCity4():Observable<any>{
  const url = 'https://vast-shore-74260.herokuapp.com/banks?';
  return this.http.get<any>(url+'city=GURGAON');
}
}
