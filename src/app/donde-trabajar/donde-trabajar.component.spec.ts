import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DondeTrabajarComponent } from './donde-trabajar.component';

describe('DondeTrabajarComponent', () => {
  let component: DondeTrabajarComponent;
  let fixture: ComponentFixture<DondeTrabajarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DondeTrabajarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DondeTrabajarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
