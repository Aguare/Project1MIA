import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavInventoryComponent } from './nav-inventory.component';

describe('NavInventoryComponent', () => {
  let component: NavInventoryComponent;
  let fixture: ComponentFixture<NavInventoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavInventoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavInventoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
