import { Component, OnInit } from '@angular/core';
import { MenuService } from '../services/apiService/menu.service';
import { ItemService } from '../services/apiService/item.service';
import { MenuItem } from '../model/Entities/menu';
import { Item } from '../model/Entities/item';

import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  menuModel: MenuItem[] = [];
  itemsByMenuId: { [key: string]: Item[] } = {};

  constructor(
    private menuService: MenuService,
    private itemService: ItemService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.menuService.getAll().subscribe(response => {
      this.menuModel = response.menus;
      console.log('Loaded menus:', this.menuModel); // Menüleri kontrol et
      this.menuModel.forEach(menu => this.loadItems(menu.id));
    });
  }

  getItemsForMenu(menuId: string): Item[] {
    return this.itemsByMenuId[menuId];
  }

  loadItems(menuId: string): void {
    this.itemService.getByMenuId(menuId).subscribe((items: any) => {
      this.itemsByMenuId[menuId] = items.items;

      console.log(this.itemsByMenuId)
      console.log(`Loaded items for menu ${menuId}:`, items.items); // Veriyi kontrol et
    });
  }


  goItems(menuId: string){

    this.router.navigate(["/getItems", menuId])
  }
}
