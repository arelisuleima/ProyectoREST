import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FuncionesComponent } from './funciones.component';

describe('FuncionesComponent', () => {
  let component: FuncionesComponent;
  let fixture: ComponentFixture<FuncionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FuncionesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FuncionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
