import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavCellarComponent } from './nav-cellar.component';

describe('NavCellarComponent', () => {
  let component: NavCellarComponent;
  let fixture: ComponentFixture<NavCellarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavCellarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavCellarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
