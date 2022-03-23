import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChartProductComponent } from './components/chart-product/chart-product.component';
import { CreateProductComponent } from './components/create-product/create-product.component';
import { ListProductComponent } from './components/list-product/list-product.component';

const routes: Routes = [
  { path: 'product/new', component: CreateProductComponent },
  { path: 'product/list', component: ListProductComponent },
  { path: 'product/chart', component: ChartProductComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DatavizRoutingModule { }
