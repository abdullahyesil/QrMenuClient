import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UiComponent } from './ui.component';
import { MenuComponent } from './menu/menu.component';

const routes: Routes = [
  { path: '', component: UiComponent },
{path:'menu/:id', component:MenuComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UiRoutingModule { }
