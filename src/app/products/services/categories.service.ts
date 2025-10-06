import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '@env/environment.development';
import { CategoriesResponse } from '@products/interfaces/categoriesResponse.interface';
import { Observable } from 'rxjs';


const baseUrl = environment.baseUrl;

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {
  private http = inject(HttpClient);

  constructor() { }

  getAllCategories(): Observable<CategoriesResponse[]> {
      return this.http.get<CategoriesResponse[]>(`${baseUrl}/categories`);
  }

}
