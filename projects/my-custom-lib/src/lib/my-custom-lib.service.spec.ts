import { TestBed } from '@angular/core/testing';

import { MyCustomLibService } from './my-custom-lib.service';

describe('MyCustomLibService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MyCustomLibService = TestBed.get(MyCustomLibService);
    expect(service).toBeTruthy();
  });
});
