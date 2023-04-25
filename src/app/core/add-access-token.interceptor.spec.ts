import { TestBed } from '@angular/core/testing';

import { AddAccessTokenInterceptor } from './add-access-token.interceptor';

describe('AddAccessTokenInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      AddAccessTokenInterceptor
    ]
  }));

  it('should be created', () => {
    const interceptor: AddAccessTokenInterceptor = TestBed.inject(AddAccessTokenInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
