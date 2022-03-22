import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DatavizRoutingModule } from './dataviz-routing.module';
import { CreateProductComponent } from './components/create-product/create-product.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    CreateProductComponent
  ],
  imports: [
    CommonModule,
    DatavizRoutingModule,
    ReactiveFormsModule
  ]
})
export class DatavizModule { }
