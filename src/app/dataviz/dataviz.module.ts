import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DatavizRoutingModule } from './dataviz-routing.module';
import { CreateProductComponent } from './components/create-product/create-product.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ListProductComponent } from './components/list-product/list-product.component';
import { NgChartsModule } from 'ng2-charts';
import { ChartProductComponent } from './components/chart-product/chart-product.component';


@NgModule({
  declarations: [
    CreateProductComponent,
    ListProductComponent,
    ChartProductComponent
  ],
  imports: [
    CommonModule,
    DatavizRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgChartsModule
  ],
  exports: [
    HttpClientModule
  ]
})
export class DatavizModule { }
