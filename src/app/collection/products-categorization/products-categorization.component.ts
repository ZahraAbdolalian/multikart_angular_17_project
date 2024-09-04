import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';
import { Post } from '../../model/post.model';
import { ApiService } from '../../service/api.service';
import { SharedImports } from '../../shared/shared-imports/shared.module';
import { CartProduct } from '../../model/cart-product.model';
import { UserCartService } from '../../service/user-cart.service';



@Component({
  selector: 'app-products-categorization',
  standalone: true,
  imports: [
    SharedImports
  ],
  templateUrl: './products-categorization.component.html',
  styleUrl: './products-categorization.component.scss'
})
export class ProductsCategorizationComponent implements OnInit, OnDestroy {
  private routeSubscription!: Subscription;
  private apiSubscription!: Subscription;

  starsArray: any[] = new Array(5);
  productCategory = ''
  isLoading = true

  displayedColumns: string[] = ['image', 'title', 'price', 'rating'];
  dataSource = new MatTableDataSource<Post>();

  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort !: MatSort;

  constructor(
    private apiService: ApiService,
    private route: ActivatedRoute,
    private userCart: UserCartService
  ) { }

  ngOnInit(): void {

    this.isLoading = true;

    this.routeSubscription = this.route.params.subscribe(
      (params: Params) => {
        this.productCategory = params['category']

        this.apiSubscription = this.apiService.getAllProductsInCategory(this.productCategory).subscribe((data) => {
          this.dataSource.data = data;
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;
        });
        this.isLoading = false;
      }
    )
  }

  addToCart(product: Post , quantity: number) {
    const newProduct : CartProduct= {
      name: product.title,
      id: product.id,
      image : product.image,
      price : product.price,
      quantity : quantity,
      total : (product.price * quantity)
    }
    this.userCart.addProduct(newProduct)
  }

  ngOnDestroy(): void {
    this.routeSubscription.unsubscribe();
    this.apiSubscription.unsubscribe();
  }
}
