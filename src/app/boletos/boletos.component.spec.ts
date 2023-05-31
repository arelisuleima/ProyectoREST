import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoletosComponent } from './boletos.component';

describe('BoletosComponent', () => {
  let component: BoletosComponent;
  let fixture: ComponentFixture<BoletosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoletosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BoletosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
