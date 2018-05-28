import { TestBed, inject } from '@angular/core/testing';

import { OurServicesService } from './our-services.service';

describe('OurServicesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [OurServicesService]
    });
  });

  it('should be created', inject([OurServicesService], (service: OurServicesService) => {
    expect(service).toBeTruthy();
  }));
});
