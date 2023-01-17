import { Component, OnInit } from '@angular/core';
import {productHttpService as productHttpService} from '@angular/common/http';
import { ProductHttpServicesService } from '../../services/product-http-services.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  constructor(private productHttpService: ProductHttpServicesService) {}

  ngOnInit(): void{
    //this.getProducts();
    //this.getProduct();
    //this.createProduct();
    //this.updateProduct();
    this.deleteProduct();
  }

  getProducts():void{
    const url ="https://api.escuelajs.co/api/v1/products";
    const response = this.productHttpService.getAll().subscribe
    (response => {console.log(response);
    });
  }

  getProduct(){
    const url ="https://api.escuelajs.co/api/v1/products/20";
    const response = this.productHttpService.getOne(2).subscribe
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
    this.productHttpService.store(url, product:productHttpService).subscribe(
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
    this.productHttpService.update(url, data).subscribe(
      response => {console.log(response);
      }
    );
  }

  deleteProduct(){
    const url = "https://api.escuelajs.co/api/v1/products/202";
    this.productHttpService.destroy(url).subscribe
    (response => {console.log(response);});
  }
}