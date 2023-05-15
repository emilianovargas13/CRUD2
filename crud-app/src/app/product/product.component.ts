import { Component, OnInit } from '@angular/core';

interface Product {
  id: number;
  name: string;
}

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  products: Product[] = [];
  newProduct: Product = {
    id: 0,
    name: ''
  };

  constructor() { }

  ngOnInit() {
    this.loadProducts();
  }

  loadProducts() {
    const productsString = localStorage.getItem('products');
    if (productsString) {
      this.products = JSON.parse(productsString);
    }
  }

  saveProducts() {
    localStorage.setItem('products', JSON.stringify(this.products));
  }

  addProduct() {
    this.newProduct.id = this.products.length + 1;
    this.products.push({ ...this.newProduct });
    this.newProduct.name = '';
    this.saveProducts();
  }

  deleteProduct(product: Product) {
    const index = this.products.indexOf(product);
    this.products.splice(index, 1);
    this.saveProducts();
  }
}
