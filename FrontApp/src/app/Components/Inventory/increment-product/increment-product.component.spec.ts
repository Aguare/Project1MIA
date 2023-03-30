import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IncrementProductComponent } from './increment-product.component';

describe('IncrementProductComponent', () => {
  let component: IncrementProductComponent;
  let fixture: ComponentFixture<IncrementProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IncrementProductComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IncrementProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
