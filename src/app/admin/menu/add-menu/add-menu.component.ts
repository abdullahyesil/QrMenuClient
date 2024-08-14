import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MenuService } from '../../../services/apiService/menu.service';
import { ResponseModel } from '../../../model/Entities/response';

@Component({
  selector: 'app-add-menu',
  templateUrl: './add-menu.component.html',
  styleUrl: './add-menu.component.scss'
})
export class AddMenuComponent implements OnInit {
  creatorId: string = 'Tessadadst';
  menuForm: FormGroup;
  constructor(
    private fb: FormBuilder,
    private menuService: MenuService
  ) {
  }




  ngOnInit(): void {
    this.menuForm = this.fb.group({
      name: ['', Validators.required],
      description: [''],
      qrCodeUrl: [''],
      link: ['']
    });
  }


  onSubmit(){
    if (this.menuForm.valid) {
      const menuData = {
        ...this.menuForm.value,
        creatorId: this.creatorId
      }; 

    this.menuService.addMenu(menuData).subscribe(response => 
    { if(response.success)
      alert("Başarılı")
      else
      alert("başarısız");
    }

    )
      
    }

  }

}
