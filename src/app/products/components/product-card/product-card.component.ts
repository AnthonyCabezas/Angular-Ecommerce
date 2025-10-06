import { SlicePipe } from '@angular/common';
import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ProductsResponse } from '@products/interfaces/productResponse.interface';


@Component({
  selector: 'product-card',
  imports: [RouterLink,SlicePipe,],
  templateUrl: './product-card.component.html',
  styles: `
    .hover-zoomIn:hover {
      transition: transform 0.3s ease-in-out;
      transform: scale(1.08);
    }
    `
})
export class ProductCardComponent { 
  product = input.required<ProductsResponse>();
  constructor(){}
}
