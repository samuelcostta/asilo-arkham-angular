import { TestBed } from '@angular/core/testing';
import { ResolveFn } from '@angular/router';

import { funcionarioResolver } from './funcionario.resolver';

describe('funcionarioResolver', () => {
  const executeResolver: ResolveFn<boolean> = (...resolverParameters) => 
      TestBed.runInInjectionContext(() => funcionarioResolver(...resolverParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeResolver).toBeTruthy();
  });
});
