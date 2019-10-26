import { TestBed, inject } from '@angular/core/testing';

import { ApiService } from './api.service';
// @ts-ignore
import { beforeEach } from 'jasmine';
// @ts-ignore
import { expect } from 'jasmine';
// @ts-ignore
import { describe } from 'jasmine';
// @ts-ignore
import { it } from 'jasmine';

describe('ApiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ApiService]
    });
  });

  it('should be created', inject([ApiService], (service: ApiService) => {
    expect(service).toBeTruthy();
  }));
});
