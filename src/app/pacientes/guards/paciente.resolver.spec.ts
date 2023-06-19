import { TestBed } from '@angular/core/testing';
import { ResolveFn } from '@angular/router';

import { PacienteResolver } from './paciente.resolver';

describe('pacienteResolver', () => {
  const executeResolver: ResolveFn<boolean> = (...resolverParameters) =>
      TestBed.runInInjectionContext(() => PacienteResolver(...resolverParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeResolver).toBeTruthy();
  });
});
