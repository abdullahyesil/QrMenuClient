import { Component, Input, input, OnInit } from '@angular/core';
import { ItemService } from '../../../services/apiService/item.service';
import { Item } from '../../../model/Entities/item';

@Component({
  selector: 'app-get-items',
  templateUrl: './get-items.component.html',
  styleUrl: './get-items.component.scss'
})
export class GetItemsComponent implements OnInit {
  items: Item[] = [];

  @Input() menuId: string = "";
  constructor(private itemService: ItemService) {}

  ngOnInit(): void {
    this.loadItems();
  }

  loadItems(): void {
    this.itemService.getByMenuId(this.menuId).subscribe(data => {
      this.items = data.items;
    });
  }
}
