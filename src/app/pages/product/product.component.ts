import { Component, OnInit } from '@angular/core';
import {HttpClient as HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  constructor(private httpClient: HttpClient) {}

  ngOnInit(): void{
    //this.getProducts();
    //this.getProduct();
    this.createProduct();
    //this.updateProduct();
  }

  getProducts():void{
    const url ="https://api.escuelajs.co/api/v1/products";
    const response = this.httpClient.get(url).subscribe
    (response => {console.log(response);
    });
  }

  getProduct(){
    const url ="https://api.escuelajs.co/api/v1/products/20";
    const response = this.httpClient.get(url).subscribe
    (response => {console.log(response);
    });
  }

  createProduct(){
    const data = {
      title:"Zapatos",
      price:20,
      description:"deportivos / Brandon Caranqui",
      images:["https://empresas.blogthinkbig.com/wp-content/uploads/2019/11/Imagen3-245003649.jpg?w=800"],
      categoryId:1
    }
    const url = "https://api.escuelajs.co/api/v1/products";
    this.httpClient.post(url, data).subscribe(
      response => {console.log(response);
      }
    );
  }

  updateProduct(){
    const data = {
      title:"camisas",
      price:25,
      description:"ropa deportiva / Brandon Caranqui",
      images:["https://empresas.blogthinkbig.com/wp-content/uploads/2019/11/Imagen3-245003649.jpg?w=800"],
      categoryId:1
    }
    const url = "https://api.escuelajs.co/api/v1/products/213";
    this.httpClient.put(url, data).subscribe(
      response => {console.log(response);
      }
    );
  }

}
