import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Params, RouterLink } from '@angular/router';
import { Subscription } from 'rxjs';
import { Post } from '../../model/post.model';
import { ApiService } from '../../service/api.service';
import { SpinnerComponent } from '../../shared/shared-component/spinner/spinner.component';
import { MatTableModule } from '@angular/material/table';
import { CurrencyPipe } from '@angular/common';
import { MatPaginatorModule } from '@angular/material/paginator';



@Component({
  selector: 'app-products-categorization',
  standalone: true,
  imports: [
    SpinnerComponent,
    MatTableModule,
    RouterLink,
    CurrencyPipe,
    MatPaginatorModule
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
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {

    console.log(this.isLoading);

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
    console.log(this.isLoading);
  }

  ngOnDestroy(): void {
    this.routeSubscription.unsubscribe();
    this.apiSubscription.unsubscribe();
  }
}
