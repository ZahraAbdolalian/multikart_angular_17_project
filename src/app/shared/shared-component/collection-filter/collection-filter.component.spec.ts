import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CollectionFilterComponent } from './collection-filter.component';

describe('CollectionFilterComponent', () => {
  let component: CollectionFilterComponent;
  let fixture: ComponentFixture<CollectionFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CollectionFilterComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CollectionFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
