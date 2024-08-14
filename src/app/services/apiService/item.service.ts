import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  constructor(private http:HttpClient) {

   }

  url:string = "http://localhost:5110/api/Items"

  getByMenuId(id:string):Observable<any>{
 return this.http.get<any>(this.url + "/Menu/"+ id)
  }


}
