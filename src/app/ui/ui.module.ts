import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UiRoutingModule } from './ui-routing.module';
import { UiComponent } from './ui.component';
import { MenuComponent } from './menu/menu.component';


@NgModule({
  declarations: [
    UiComponent,
    MenuComponent
  ],
  imports: [
    CommonModule,
    UiRoutingModule
  ]
})
export class UiModule { }
