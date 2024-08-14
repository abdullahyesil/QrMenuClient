import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { categoryModel } from '../../model/Entities/category';
import { Observable } from 'rxjs';
import { ResponseModel } from '../../model/Entities/response';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  
  constructor(private http:HttpClient) {

  }

 url:string = "http://localhost:5110/api/Category"

 addCategory(categoryModel: categoryModel):Observable<ResponseModel>{

  return this.http.post<ResponseModel>(this.url, categoryModel)
 }

 getCategoryByMenuId(menuId:string):Observable<any>{

  return this.http.get<any>(this.url +"/"+ menuId)
 }
}
