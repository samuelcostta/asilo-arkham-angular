import { TestBed } from '@angular/core/testing';
import { ResolveFn } from '@angular/router';

import { agendaResolver } from './agenda.resolver';

describe('agendaResolver', () => {
  const executeResolver: ResolveFn<boolean> = (...resolverParameters) => 
      TestBed.runInInjectionContext(() => agendaResolver(...resolverParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeResolver).toBeTruthy();
  });
});
