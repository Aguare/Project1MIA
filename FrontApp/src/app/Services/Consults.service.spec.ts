/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ConsultsService } from './Consults.service';

describe('Service: Consults', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ConsultsService]
    });
  });

  it('should ...', inject([ConsultsService], (service: ConsultsService) => {
    expect(service).toBeTruthy();
  }));
});
