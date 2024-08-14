import { Component, inject, OnInit } from '@angular/core';
import { MenuService } from '../../../services/apiService/menu.service';
import { MenuItem } from '../../../model/Entities/menu';
import { MatDialog } from '@angular/material/dialog';
import { AddMenuComponent } from '../add-menu/add-menu.component';

@Component({
  selector: 'app-get-menu',
  templateUrl: './get-menu.component.html',
  styleUrls: ['./get-menu.component.scss']
})
export class GetMenuComponent implements OnInit {
  menuModel: { menu: MenuItem, showItems: boolean }[] = [];

  constructor(private menuService: MenuService) {}

  ngOnInit(): void {
    this.loadMenu();
  }

  loadMenu(): void {
    this.menuService.getAll().subscribe(resp => {
      console.log('API Yanıtı:', resp);
      console.log('Menu Listesi:', resp.menus);
      this.menuModel = Array.isArray(resp.menus) ? resp.menus.map((menu: MenuItem) => ({ menu, showItems: false })) : [];
      console.log('Menu Modeli:', this.menuModel);
    });
  }

  toggleItems(menuId: string): void {
    console.log(menuId)
    const menuItem = this.menuModel.find(item => item.menu.id === menuId);
    if (menuItem) {
      menuItem.showItems = !menuItem.showItems;
    }
  }

  readonly dialog = inject(MatDialog);

  openDialog() {
    const dialogRef = this.dialog.open(AddMenuComponent);

    dialogRef.afterClosed().subscribe(result => {
      this.loadMenu();
    });
  }
}
