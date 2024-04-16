import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EjercicioVuelosComponent } from './ejercicio-vuelos.component';

describe('EjercicioVuelosComponent', () => {
  let component: EjercicioVuelosComponent;
  let fixture: ComponentFixture<EjercicioVuelosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EjercicioVuelosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EjercicioVuelosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
