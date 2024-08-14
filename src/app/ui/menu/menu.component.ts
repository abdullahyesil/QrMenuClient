import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MenuItem } from '../../model/Entities/menu';
import { MenuService } from '../../services/apiService/menu.service';
import { ItemService } from '../../services/apiService/item.service';
import { Item } from '../../model/Entities/item';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})

export class MenuComponent {
  menuId: string | null = null;
  constructor(
    private route: ActivatedRoute,
    private menuService:MenuService,
    private itemService:ItemService
  ) {}

  menuModel:MenuItem;
  itemsModel:Item[] = [];
  ngOnInit(): void {
    // URL parametrelerini al
    this.route.paramMap.subscribe(params => {
      this.menuId = params.get('id');

      this.loadMenuData(this.menuId);
    });
  }

  loadMenuData(menuId: string | null): void {
    // Menü verilerini buradan alabilirsiniz. Örneğin, bir servisi çağırarak.
    if (menuId) {
      this.menuService.getById(menuId).subscribe(resp=> 
        this.menuModel = resp.menu
      )
      this.itemService.getByMenuId(menuId).subscribe(resp=>

        this.itemsModel = resp.items
      )
    }
 
  }

  // preferences: any = {};
  // applyDesignPreferences(): void {
  //   if (this.preferences) {
  //     // HTML içeriği güncelleme
  //     document.getElementById('navbar')!.innerHTML = this.preferences.NavbarHtml;
  //     document.getElementById('footer')!.innerHTML = this.preferences.FooterHtml;
  //     document.getElementById('body')!.innerHTML = this.preferences.BodyHtml;

  //     // CSS içeriği güncelleme
  //     const style = document.createElement('style');
  //     style.textContent = `
  //       #navbar { ${this.preferences.NavbarCss} }
  //       #footer { ${this.preferences.FooterCss} }
  //       #body { ${this.preferences.BodyCss} }
  //     `;
  //     document.head.appendChild(style);
  //   }
  // }
}


