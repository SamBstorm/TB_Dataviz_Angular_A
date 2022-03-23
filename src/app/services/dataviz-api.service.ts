import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IProduct } from '../models/iproduct';
import { map, Observable } from 'rxjs';
import { IApiResult } from '../models/iapi-result';
import { Idatas } from '../models/chart/idatas';

@Injectable({
  providedIn: 'root'
})
export class DatavizApiService {

  private _url : string = 'http://localhost:8000/product/';
  constructor(private _http : HttpClient) { }

  public post(newProduct : IProduct) : Observable<IApiResult>{
    return this._http.post<IApiResult>(this._url, newProduct);
  }

  public getAll() : Observable<IProduct[]>{
    return this._http.get<IProduct[]>(this._url);
  }
  
  public get(id : number) : Observable<IProduct>{
    return this._http.get<IProduct>(this._url+id);
  }

  public getChartData() : Observable<Idatas[]>{
    return this._http.get<IProduct[]>(this._url)
    .pipe(map(p=> {
      let result : Idatas[] = [];
      p.forEach( e =>{ 
        if(result.find(r=>r.label==e.name)){
          result.find(r=>r.label == e.name)?.data.push(e.price);
        }
        else{
          result.push({data : [e.price], label: e.name})
        }
      });
      return result;
    }));
  }
}
