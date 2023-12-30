import { NgModule } from '@angular/core';
import { CommonModule, CurrencyPipe } from '@angular/common';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatBadgeModule } from '@angular/material/badge';
import { MatCardModule } from '@angular/material/card';
import { MatTabsModule } from '@angular/material/tabs';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSliderModule } from '@angular/material/slider';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { SpinnerComponent } from '../shared-component/spinner/spinner.component';
import { RouterLink } from '@angular/router';
import { TitleComponent } from '../shared-component/title/title.component';


const MaterialComponents = [
  CommonModule,
  MatToolbarModule,
  MatListModule,
  MatIconModule,
  MatButtonModule,
  MatMenuModule,
  MatBadgeModule,
  MatCardModule,
  MatTabsModule,
  MatProgressSpinnerModule,
  MatInputModule,
  MatPaginatorModule,
  MatSliderModule,
  MatTableModule,
  MatSortModule,
  MatSidenavModule,
  MatFormFieldModule,
  MatSelectModule,
  SpinnerComponent,
  CurrencyPipe,
  RouterLink,
  TitleComponent
]

@NgModule({
  imports: [MaterialComponents],
  exports: [MaterialComponents]
})
export class SharedImports { }
