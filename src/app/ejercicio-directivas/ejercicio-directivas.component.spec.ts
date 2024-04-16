import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EjercicioDirectivasComponent } from './ejercicio-directivas.component';

describe('EjercicioDirectivasComponent', () => {
  let component: EjercicioDirectivasComponent;
  let fixture: ComponentFixture<EjercicioDirectivasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EjercicioDirectivasComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EjercicioDirectivasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
