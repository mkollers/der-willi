import { TimespanPipe } from './timespan.pipe';

describe('TimespanPipe', () => {
  let pipe: TimespanPipe;

  beforeEach(() => {
    pipe = new TimespanPipe();
  });

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should format 17:39,198', () => {
    const formatted = pipe.transform(1739198);
    expect(formatted).toBe('17:39,198');
  });
});
