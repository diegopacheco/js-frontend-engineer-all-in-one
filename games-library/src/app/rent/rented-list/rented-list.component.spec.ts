import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RentedListComponent } from './rented-list.component';

describe('RentedListComponent', () => {
  let component: RentedListComponent;
  let fixture: ComponentFixture<RentedListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RentedListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RentedListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
