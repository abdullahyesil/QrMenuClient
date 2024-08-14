import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ItemService } from '../../../services/apiService/item.service';
import { Item } from '../../../model/Entities/item';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { CategoryService } from '../../../services/apiService/category.service';
import { categoryModel } from '../../../model/Entities/category';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.scss']
})
export class AddItemComponent implements OnInit {
  itemForm: FormGroup;
  categories: categoryModel[];

  constructor(
    private fb: FormBuilder,
    private itemService: ItemService,
    private categoryService: CategoryService,
    @Inject(MAT_DIALOG_DATA) public data: string,
    private dialogRef: MatDialogRef<AddItemComponent>
  ) {}

  ngOnInit(): void {
    this.itemForm = this.fb.group({
      menuId: [this.data, Validators.required],
      name: ['', Validators.required],
      description: ['', Validators.required],
      price: [0, [Validators.required, Validators.min(0)]],
      category: ['', Validators.required],
      imageUrl: ['', Validators.required]
    });

    this.categoryService.getCategoryByMenuId(this.data).subscribe(rep => {
      this.categories = rep.categories;
    });
  }

  onSubmit(): void {
    if (this.itemForm.valid) {
      const item: Item = this.itemForm.value;
      this.itemService.addItem(item).subscribe(
        response => {
          if (response.success) {
            alert(response.message);
            this.dialogRef.close(true);
          } else {
            alert(response.message);
          }
        },
        error => {
          console.error('Error adding item', error);
        }
      );
    }
  }

  onCancel(): void {
    this.dialogRef.close();
  }
}
