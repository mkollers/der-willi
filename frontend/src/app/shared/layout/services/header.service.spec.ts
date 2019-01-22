import { TestBed } from '@angular/core/testing';

import { HeaderService } from './header.service';

describe('HeaderService', () => {
  let service: HeaderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.get(HeaderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should set headline', () => {
    // Act
    service.headline = 'Schnitzel';

    // Assert
    expect(service.headline).toBe('Schnitzel');
  });

  it('should set navigate back uri', () => {
    // Act
    service.navigateBackUri = '/schnitzel';

    // Assert
    expect(service.navigateBackUri).toBe('/schnitzel');
  });
});
