import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PacientesListComponent } from './pacientes-list.component';

describe('PacientesListComponent', () => {
  let component: PacientesListComponent;
  let fixture: ComponentFixture<PacientesListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PacientesListComponent]
    });
    fixture = TestBed.createComponent(PacientesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
