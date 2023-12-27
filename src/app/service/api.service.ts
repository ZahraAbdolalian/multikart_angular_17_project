import { Injectable } from '@angular/core';
import { Post } from '../model/post.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getAllProducts() {
    return this.http.get<Post[]>('https://fakestoreapi.com/products')
  }

  getSomeProducts(num: number) {
    return this.http.get<Post[]>(`https://fakestoreapi.com/products?limit=${num}`)
  }

  getAllProductsInCategory(category: string) {
    return this.http.get<Post[]>(`https://fakestoreapi.com/products/category/${category}`)
  }

  getCategoriesName(){
    return this.http.get<string[]>('https://fakestoreapi.com/products/categories')
  }

  getSomeProductInCategory(num: number, categoryName: string) {
    return this.http.get<Post[]>(`https://fakestoreapi.com/products/category/${categoryName}?limit=${num}`)
  }

  getProductsWithId(id: number) {
    return this.http.get<Post>(`https://fakestoreapi.com/products/${id}`)
  }
}
