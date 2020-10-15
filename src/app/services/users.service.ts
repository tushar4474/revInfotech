import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http:HttpClient) { }

  getData():Observable<any>{
     const url = 'https://vast-shore-74260.herokuapp.com/banks?';
     return this.http.get<any>(url+'city=MUMBAI');
  }

  getData2():Observable<any>{
    const url = 'https://vast-shore-74260.herokuapp.com/banks?';
    return this.http.get<any>(url+'city=PUNE');
 }
 getData3():Observable<any>{
  const url = 'https://vast-shore-74260.herokuapp.com/banks?';
  return this.http.get<any>(url+'city=GURGAON');
}
getData4():Observable<any>{
  const url = 'https://vast-shore-74260.herokuapp.com/banks?';
  return this.http.get<any>(url+'city=DELHI');
}





}
