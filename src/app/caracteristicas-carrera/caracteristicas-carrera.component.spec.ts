import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaracteristicasCarreraComponent } from './caracteristicas-carrera.component';

describe('CaracteristicasCarreraComponent', () => {
  let component: CaracteristicasCarreraComponent;
  let fixture: ComponentFixture<CaracteristicasCarreraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CaracteristicasCarreraComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CaracteristicasCarreraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
