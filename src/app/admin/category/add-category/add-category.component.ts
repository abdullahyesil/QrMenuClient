import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CategoryService } from '../../../services/apiService/category.service';
import { response } from 'express';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrl: './add-category.component.scss'
})
export class AddCategoryComponent {
  categoryForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private categoryService:CategoryService,
    @Inject(MAT_DIALOG_DATA) public data: string
  ) {
    this.categoryForm = this.fb.group({
      menuId: [this.data, Validators.required],
      name: ['', Validators.required]
    });
  }

  onSubmit(){
    if(this.categoryForm.valid)
    {
this.categoryService.addCategory(this.categoryForm.value).subscribe(rep=> {
  if(rep.success){
    alert(rep.message)
  }
  else{
    alert(rep.message)
  }
})

    }
  }

}
