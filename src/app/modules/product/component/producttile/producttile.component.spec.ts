import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProducttileComponent } from './producttile.component';

describe('ProducttileComponent', () => {
  let component: ProducttileComponent;
  let fixture: ComponentFixture<ProducttileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProducttileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProducttileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
