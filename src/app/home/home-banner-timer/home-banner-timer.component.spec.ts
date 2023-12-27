import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeBannerTimerComponent } from './home-banner-timer.component';

describe('HomeBannerTimerComponent', () => {
  let component: HomeBannerTimerComponent;
  let fixture: ComponentFixture<HomeBannerTimerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeBannerTimerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HomeBannerTimerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
