import { Injectable } from '@angular/core';
import { MenuService } from '../../../services/apiService/menu.service';
import { Menu } from '../menu';



@Injectable({
  providedIn: 'root' // Servisin tüm uygulamada kullanılabilir olması için root'a eklenir
})
export class MenuRepository {
    entity: Menu[] = []
    constructor(
        private MenuService:MenuService
    ){}

getAll(){
   
    return this.entity
}
}