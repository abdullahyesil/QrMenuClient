import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MenuItem } from '../../model/Entities/menu';
import { MenuService } from '../../services/apiService/menu.service';
import { ItemService } from '../../services/apiService/item.service';
import { Item } from '../../model/Entities/item';
import { CategoryService } from '../../services/apiService/category.service';
import { categoryModel } from '../../model/Entities/category';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  menuId: string | null = null;
  menuModel: MenuItem;
  itemsModel: Item[] = [];
  categories: categoryModel[] = [];
  categorizedItems: { [key: string]: Item[] } = {};

  constructor(
    private route: ActivatedRoute,
    private menuService: MenuService,
    private itemService: ItemService,
    private categoryService: CategoryService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.menuId = params.get('id');
      if (this.menuId) {
        this.loadMenuData(this.menuId);
        this.loadCategories(this.menuId);
      }
    });
  }

  loadMenuData(menuId: string): void {
    this.menuService.getById(menuId).subscribe(resp => {
      this.menuModel = resp.menu;
    });

    this.itemService.getByMenuId(menuId).subscribe(resp => {
      this.itemsModel = resp.items;
      this.categorizeItems(this.itemsModel);
    });
  }

  loadCategories(menuId: string): void {
    this.categoryService.getCategoryByMenuId(menuId).subscribe(resp => {
      this.categories = resp.categories;
    });
  }

  categorizeItems(items: Item[]): void {
    this.categorizedItems = items.reduce((acc, item) => {
      const categoryId = item.category; // Assume 'category' is a string that matches with category IDs

      if (!acc[categoryId]) {
        acc[categoryId] = [];
      }

      acc[categoryId].push(item);
      return acc;
    }, {} as { [key: string]: Item[] });
  }

  getCategoryName(id: string): string {
    const category = this.categories.find(cat => cat.id === id);
    return category ? category.name : 'Unknown';
  }

  getCategoryIds(): string[] {
    return Object.keys(this.categorizedItems);
  }
  
}
