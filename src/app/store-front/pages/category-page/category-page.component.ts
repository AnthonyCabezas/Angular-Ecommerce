import { Component, inject, OnInit } from '@angular/core';
import { rxResource, toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '@products/services/products.service';
import { ProductCardComponent } from "@products/components/product-card/product-card.component";
import { map } from 'rxjs';

@Component({
  selector: 'app-category-page',
  imports: [ProductCardComponent],
  templateUrl: './category-page.component.html',
})
export class CategoryPageComponent{ 
  activatedRoute = inject(ActivatedRoute)
  productService = inject(ProductsService)


  categoryId = toSignal(this.activatedRoute.params.pipe(map(({category}) => category)))

  constructor() {}
  productsResource = rxResource({
    request: () => ({id : this.categoryId()}),
    loader: ({ request }) => {
      return this.productService.getProductsByCategoryID(request.id);
    },
  });
}
