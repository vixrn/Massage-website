import { Component, OnInit } from '@angular/core';
import { HttpModule } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { ProductsService, Discounts, Products, Discount } from '../products.service';
import 'rxjs/add/operator/map'
import { NumberSymbol } from '@angular/common';
import { NgForm, NG_ASYNC_VALIDATORS } from '@angular/forms';


@Component({
  selector: 'app-products',
  styleUrls: ['./products.component.css'],
  templateUrl: './products.component.html'
})
// {{discs | json}}
export class ProductsComponent implements OnInit{

  private id: number;
  private discs: Observable<Discounts[]>;
  private prods: Observable<Products[]>;

  constructor(private _productsService: ProductsService) {}

  ngOnInit(){
    this.discs = this._productsService.discs;
    this.prods = this._productsService.prods;

    this._productsService.getAllDiscounts();

    this._productsService.getAllProducts();

  }
  deleteDisc(id): void{
    this._productsService.delete(id).subscribe();
    console.log(id);
  }
  add(Name: string, Startdate: Date, Expirydate: Date, Description: string, TermsAndConditions: string, DiscountOfferType: string, OrganisationID: number): void{
    this._productsService.add({Name, Startdate, Expirydate, Description, TermsAndConditions, DiscountOfferType, OrganisationID} as Discount).subscribe();
    console.log(Name, Startdate, Expirydate, Description, TermsAndConditions, DiscountOfferType, OrganisationID);
    
  }
  update(id: number, ID: number, Name: string, Startdate: Date, Expirydate: Date, Description: string, TermsAndConditions: string, DiscountOfferType: string, OrganisationID: number): void{
    this._productsService.update(id, {ID, Name, Startdate, Expirydate, Description, TermsAndConditions, DiscountOfferType, OrganisationID} as Discount).subscribe();
    console.log(id);
  }
}

