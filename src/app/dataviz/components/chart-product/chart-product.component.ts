import { Component, OnInit } from '@angular/core';
import { Idatas } from 'src/app/models/chart/idatas';
import { DatavizApiService } from 'src/app/services/dataviz-api.service';

@Component({
  selector: 'app-chart-product',
  templateUrl: './chart-product.component.html',
  styleUrls: ['./chart-product.component.scss']
})
export class ChartProductComponent implements OnInit {

  public chartDatas : Idatas[] = [];
  public chartLabels : string[] = [
    'Fruit/Légume',
    'Viande',
    'Boisson'
  ];
  constructor(
    private _api : DatavizApiService
  ) { }

  ngOnInit(): void {
    this._api.getChartData().subscribe({
      next : data => this.chartDatas = data
    });
  }

}
