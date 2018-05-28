import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { Observable } from 'rxjs/Observable';
// import { NumberValueAccessor } from '@angular/forms';

export interface Products {
  name: string;
  id: number;
  group: string;
  type: string;
  category: string;
}

export interface Discounts {
  ID: number
  Name: string;
  Description: string;
  DiscountOfferType: string;
  Expirydate: Date;
  Startdate: Date;
  TermsAndConditions: string;
  OrganisationID: number;
}

export interface Discount {
  Name: string;
  Description: string;
  DiscountOfferType: string;
  Expirydate: Date;
  Startdate: Date;
  TermsAndConditions: string;
  OrganisationID: number;
}

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class ProductsService {

  discs: Observable<Discounts[]>;
  prods: Observable<Products[]>;
  private apiURL: string = 'http://193.10.202.76/Discounts/api/Discount_offers/';
  private apiURLL: string = 'http://193.10.202.76/utveckling/api/Discount_offers/';
  private apiProd: string = 'http://193.10.202.76/utveckling/api/Products/';

  constructor(private http: HttpClient) {
  }

  public getAllDiscounts(){
    this.http.get(this.apiURLL).subscribe(data => {
      this.discs = data as Observable<Discounts[]>;
    }, error => console.error(error));
  }
  public getAllProducts(){
    this.http.get(this.apiProd).subscribe(data => {
      this.prods = data as Observable<Products[]>;
    }, error => console.error(error));
  }

  public getSingle(id: number) {
    return this.http.get(this.apiURL + id);
  }
  public add(discount: Discount){
    // const toAdd = JSON.stringify({ name, start, exp, description, terms, type});
    console.log(this.apiURLL, discount);
    return this.http.post(this.apiURLL, discount, httpOptions);
    
  }

  public update(id: number, discount: Discount){
    console.log(this.apiURLL + id, discount);
    return this.http.put(this.apiURLL + id, discount, httpOptions);
  }

  public delete(id: number){
    return this.http.delete(this.apiURLL + id)
  }
}