import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgregarComponent } from './agregar/agregar.component';



@NgModule({
  declarations: [
    AgregarComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    AgregarComponent
  ]
})
export class BodyModule { }
