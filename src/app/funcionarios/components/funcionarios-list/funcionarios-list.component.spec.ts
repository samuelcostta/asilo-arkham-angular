import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FuncionariosListComponent } from './funcionarios-list.component';

describe('FuncionariosListComponent', () => {
  let component: FuncionariosListComponent;
  let fixture: ComponentFixture<FuncionariosListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FuncionariosListComponent]
    });
    fixture = TestBed.createComponent(FuncionariosListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
