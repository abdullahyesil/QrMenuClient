import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AddMenuComponent } from './menu/add-menu/add-menu.component';
import { UpdateMenuComponent } from './menu/update-menu/update-menu.component';
import { GetMenuComponent } from './menu/get-menu/get-menu.component';
import { GetItemsComponent } from './item/get-items/get-items.component';
import { AddItemComponent } from './item/add-item/add-item.component';
import { UpdateItemComponent } from './item/update-item/update-item.component';
import { ReactiveFormsModule } from '@angular/forms';
import {MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';


@NgModule({
  declarations: [
    AdminComponent,
    NavbarComponent,
    AddMenuComponent,
    UpdateMenuComponent,
    GetMenuComponent,
    GetItemsComponent,
    AddItemComponent,
    UpdateItemComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatButtonModule
  ]
})
export class AdminModule { }
