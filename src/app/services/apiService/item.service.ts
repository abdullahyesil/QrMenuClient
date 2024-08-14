import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Item } from '../../model/Entities/item';
import { ResponseModel } from '../../model/Entities/response';

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
  addItem(itemsModel:Item):Observable<ResponseModel>
  {
    return this.http.post<ResponseModel>(this.url, itemsModel)
  }


}
