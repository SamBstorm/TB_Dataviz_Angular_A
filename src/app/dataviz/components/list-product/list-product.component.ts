import { Component, OnInit } from '@angular/core';
import { IProduct } from 'src/app/models/iproduct';
import { DatavizApiService } from 'src/app/services/dataviz-api.service';

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.scss']
})
export class ListProductComponent implements OnInit {

  public products : IProduct[] = [];
  constructor(
    private _api : DatavizApiService
  ) { }

  ngOnInit(): void {
    this._api.getAll().subscribe({
      next: data => this.products = data,
      error: err => console.error(err),
      complete: () => console.log('Fin de la récupération du GetAll.')
    })
  }

}
