import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeSpecialProductComponent } from './home-special-product.component';

describe('HomeSpecialProductComponent', () => {
  let component: HomeSpecialProductComponent;
  let fixture: ComponentFixture<HomeSpecialProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeSpecialProductComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HomeSpecialProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
