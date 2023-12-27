import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeBottomTrendingComponent } from './home-bottom-trending.component';

describe('HomeBottomTrendingComponent', () => {
  let component: HomeBottomTrendingComponent;
  let fixture: ComponentFixture<HomeBottomTrendingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeBottomTrendingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HomeBottomTrendingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
