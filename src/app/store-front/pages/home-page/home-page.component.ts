import { Component, inject } from '@angular/core';
import { rxResource } from '@angular/core/rxjs-interop';
import { ProductCardComponent } from '@products/components/product-card/product-card.component';
import { ProductsService } from '@products/services/products.service';
import { AlertErrorComponent } from "@shared/alert-error/alert-error.component";


@Component({
  selector: 'app-home-page',
  imports: [ProductCardComponent, AlertErrorComponent],
  templateUrl: './home-page.component.html',
})
export class HomePageComponent { 
  productsService = inject(ProductsService);

  productsResource = rxResource({
    request: () => ({}),
    loader: ({ request }) => {
      return this.productsService.getAllProducts();
    },
  });
}
