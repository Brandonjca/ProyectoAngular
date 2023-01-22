import { Component, OnInit } from '@angular/core';
import {HttpClient as HttpClient} from '@angular/common/http';
import { ProductHttpServiceService } from 'src/app/services/product-http-services.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  httpClient: any;
  constructor(private productHttpService: ProductHttpServiceService) {

  }

  ngOnInit(): void {
    //this.getProducts();
    //this.getProduct();
    //this.createProduct();
    //this.updateProduct();
    //this.deleteProduct();
  }

  getProducts(): void {
    const url = 'http://api.escuelajs.co/api/v1/products';
    this.productHttpService.getAll().subscribe
      (response => {
        console.log(response)
      });
  }

  getProduct() {
    const url = 'http://api.escuelajs.co/api/v1/products/20';
    this.productHttpService.getOne(2).subscribe
      (response => {
        console.log(response)
      });
  }

  createProduct() {
    const data = {
      title: "Zapatos",
      price: 25,
      description: "Deportivos / Leonel Sangolquiza",
      images: ['https://m.media-amazon.com/images/I/41lL4RYD-PL._SL500_.jpg'],
      categoryId: 1,
    }
    const url = 'http://api.escuelajs.co/api/v1/products';
    this.productHttpService.store(data).subscribe
      (response => {
        console.log(response)
      });
  }

  updateProduct() {
    const data = {
      title: "Camisetas",
      price: 15,
      description: "Deportivos / Brandon Caranqui",
      images: ['https://m.media-amazon.com/images/I/41lL4RYD-PL._SL500_.jpg'],
      categoryId: 1
    }
    const url = 'http://api.escuelajs.co/api/v1/products/226';
    this.productHttpService.update(30, data).subscribe(response => {
      console.log(response)
    });
  }

  deleteProduct() {
    const url = "https://api.escuelajs.co/api/v1/products/192";
    this.productHttpService.destroy(61).subscribe(
      response => {
        console.log(response);
      }
    );
  }
}
