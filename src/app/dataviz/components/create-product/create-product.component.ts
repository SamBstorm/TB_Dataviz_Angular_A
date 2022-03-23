import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ICategory } from 'src/app/models/icategory';
import { IProduct } from 'src/app/models/iproduct';
import { DatavizApiService } from 'src/app/services/dataviz-api.service';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.scss']
})
export class CreateProductComponent implements OnInit {

  public productForm! : FormGroup;
  public categories : ICategory[] = [
    {id : 1, name : 'Fruit/Légume'},
    {id : 2, name : 'Viande'},
    {id : 3, name : 'Boisson'}
  ];
  constructor(
    private _fb : FormBuilder,
    private _api : DatavizApiService
    ) { }

  ngOnInit(): void {
    this.productForm = this._fb.group({
      name : [null,[Validators.required, Validators.maxLength(50)]],
      description : [null, [Validators.maxLength(500)]],
      price : [null, [Validators.required, Validators.min(0.01)]],
      categoryId : [null, [Validators.required]]
    });
  }

  onSubmit(){
    if(!this.productForm.valid) throw new Error("Formulaire invalide");
    // ou 'return;' permettant d'arrêter la fonction
    // else console.dir(this.productForm);
    let result : IProduct = {
      productId : 0,
      name : this.productForm.value.name,
      description : this.productForm.value.description,
      price : this.productForm.value.price,
      categoryId : this.productForm.value.categoryId
    };
    this._api.post(result).subscribe({
      next : data => console.dir(data),
      error : err => console.error(err),
      complete : () => console.log('Fin de récupération au POST.')
    })
    this.productForm.reset();
  }
}
