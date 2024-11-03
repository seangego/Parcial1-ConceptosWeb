import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoffeComponent } from './coffe.component';
import { CoffeListComponent } from './coffe-list/coffe-list.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [CoffeListComponent],
  declarations: [CoffeComponent,CoffeListComponent]
})
export class CoffeModule { }
