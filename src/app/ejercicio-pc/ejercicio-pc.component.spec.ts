import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EjercicioPCComponent } from './ejercicio-pc.component';

describe('EjercicioPCComponent', () => {
  let component: EjercicioPCComponent;
  let fixture: ComponentFixture<EjercicioPCComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EjercicioPCComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EjercicioPCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
