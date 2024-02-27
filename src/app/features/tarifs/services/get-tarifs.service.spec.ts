import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { GetTarifsService } from './get-tarifs.service';

describe('GetTarifsService', () => {
  let service: GetTarifsService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(GetTarifsService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should call the correct url when getTarifs is called', () => {
    service.getTarifs().subscribe();
    const req = httpTestingController.expectOne('assets/tarifs-mock-data.json');
    expect(req.request.method).toBe('GET');
    httpTestingController.verify();
  });

});
