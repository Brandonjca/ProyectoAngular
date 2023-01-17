import { Injectable } from '@angular/core';
import {HttpClient as HttpClient} from '@angular/common/http';
import { ProductModel, CreateProductModel, UpdateProductModel } from '../entities/product.module';

@Injectable({
  providedIn: 'root'
})
export class ProductHttpServicesService {
   readonly API_URL:string = "https://api.escuelajs.co/api/v1/products";

  constructor(private httpClient:HttpClient) { }

  getAll(){
    const url = `${this.API_URL}`;
    return this.httpClient.get(url);
  }

  getOne(id:number){
    const url = `${this.API_URL}/${id}`; 
    return this.httpClient.get(url);
  }

  store(product:CreateProductModel){
    const url = `${this.API_URL}`; 
    return this.httpClient.post(url, product)
  }

  update(id:number, product:UpdateProductModel){
    const url = `${this.API_URL}/${id}`; 
    return this.httpClient.put(url, product)
  }

  destroy(id:number){
    const url = `${this.API_URL}/${id}`; 
    return this.httpClient.delete(url)
  }
}

