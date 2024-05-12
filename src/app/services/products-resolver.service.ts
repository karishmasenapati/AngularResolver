import { Injectable } from '@angular/core';
import { ProductService } from './product.service';
import { ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs/internal/Observable';
import { catchError } from 'rxjs/internal/operators/catchError';
import { of } from 'rxjs/internal/observable/of';

@Injectable({
  providedIn: 'root'
})
export class ProductsResolverService {

  constructor(private product: ProductService) {}
  resolve(route: ActivatedRouteSnapshot): Observable<any> {
    console.log('Called Get Product in resolver...', route);
    return this.product.getProducts().pipe(
      catchError(error => {
        return of('No data');
      })
    );
  }
}
