import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MenuItem } from '../../model/Entities/menu';
import { ResponseModel } from '../../model/Entities/response';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  url:string = "http://localhost:5110/api/Menus/"
  constructor(private httpClient: HttpClient) {
   }

   getAll():Observable<any>{
    return this.httpClient.get<any>(this.url)
   }

   addMenu(model:MenuItem):Observable<ResponseModel>{
    return this.httpClient.post<ResponseModel>(this.url, model)
   }
   getById(menuId:string){

    return this.httpClient.get<any>(this.url+menuId)
   }
   
}
