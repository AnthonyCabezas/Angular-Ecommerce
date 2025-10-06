import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '@env/environment.development';
import { ProductsResponse } from '@products/interfaces/productResponse.interface';
import { Observable } from 'rxjs';


const baseUrl = environment.baseUrl;

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private http = inject(HttpClient);

  constructor() { }

  getAllProducts(): Observable<ProductsResponse[]> {
    return this.http.get<ProductsResponse[]>(`${baseUrl}/products`);
  }

  getProductByID(id : string): Observable<ProductsResponse> {
    return this.http.get<ProductsResponse>(`${baseUrl}/products/${id}`);
  }
  
/**
 * This function retrieves products based on a specified category ID using an HTTP GET request.
 * @param {string} categoryId - The `categoryId` parameter in the `getProductsByCategoryID` function is
 * a string that represents the unique identifier of a product category. This function is used to
 * retrieve products based on the specified category ID.
 * @returns An Observable of type ProductsResponse is being returned.
 */
  getProductsByCategoryID(categoryId : string): Observable<ProductsResponse[]> {
    return this.http.get<ProductsResponse[]>(`${baseUrl}/products/GetProductsForCategory/${categoryId}`);
  }
}
