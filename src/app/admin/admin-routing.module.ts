import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { AddMenuComponent } from './menu/add-menu/add-menu.component';
import { GetItemsComponent } from './item/get-items/get-items.component';
import { GetMenuComponent } from './menu/get-menu/get-menu.component';

const routes: Routes = [
  { path: '', component: AdminComponent },
{path:'addMenu', component:AddMenuComponent},
{path:'getItems', component:GetItemsComponent},
{path:'getMenu', component:GetMenuComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
