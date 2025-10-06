import { Component, inject } from '@angular/core';
import { rxResource } from '@angular/core/rxjs-interop';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CategoriesService } from '@products/services/categories.service';
import { map, tap } from 'rxjs';
;

@Component({
  selector: 'front-navbar',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './front-navbar.component.html',
})
export class FrontNavbarComponent { 
  public btnCondition : string = 'Login';
  categoriesService = inject(CategoriesService);

  categoriesResource = rxResource({
    request: () => ({}),
    loader: ({ request }) => {
      return this.categoriesService.getAllCategories();
    },
  });
}
