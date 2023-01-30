import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewbasketComponent } from './viewbasket.component';

describe('ViewbasketComponent', () => {
  let component: ViewbasketComponent;
  let fixture: ComponentFixture<ViewbasketComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewbasketComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewbasketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
