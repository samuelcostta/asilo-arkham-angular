import { TestBed } from '@angular/core/testing';
import { ResolveFn } from '@angular/router';

import { pacienteResolver } from './paciente.resolver';

describe('pacienteResolver', () => {
  const executeResolver: ResolveFn<boolean> = (...resolverParameters) => 
      TestBed.runInInjectionContext(() => pacienteResolver(...resolverParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeResolver).toBeTruthy();
  });
});
