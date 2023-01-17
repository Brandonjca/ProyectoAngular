import { TestBed } from '@angular/core/testing';

import { ProductHttpServicesService } from './product-http-services.service';

describe('ProductHttpServicesService', () => {
  let service: ProductHttpServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductHttpServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
