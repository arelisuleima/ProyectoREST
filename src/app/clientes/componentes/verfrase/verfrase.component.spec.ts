import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerfraseComponent } from './verfrase.component';

describe('VerfraseComponent', () => {
  let component: VerfraseComponent;
  let fixture: ComponentFixture<VerfraseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerfraseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VerfraseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
