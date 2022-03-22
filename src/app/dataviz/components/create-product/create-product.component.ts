import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.scss']
})
export class CreateProductComponent implements OnInit {

  public productForm! : FormGroup;

  constructor(private _fb : FormBuilder) { }

  ngOnInit(): void {
    this.productForm = this._fb.group({
      name : [null,[Validators.required]]
    });
  }

  onSubmit(){
    if(!this.productForm.valid) throw new Error("Formulaire invalide");
    // ou 'return;' permettant d'arrêter la fonction
    else console.log(this.productForm);
  }
}
