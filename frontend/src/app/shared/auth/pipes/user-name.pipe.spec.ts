import { UserNamePipe } from './user-name.pipe';

describe('UserNamePipe', () => {
  it('create an instance', () => {
    // Act
    const pipe = new UserNamePipe();

    // Assert
    expect(pipe).toBeTruthy();
  });

  describe('transform', () => {
    let pipe: UserNamePipe;

    beforeEach(() => {
      pipe = new UserNamePipe();
    });

    it('should return empty string because of undefined', () => {
      // Act
      const result = pipe.transform(undefined);

      // Assert
      expect(result).toBe('');
    });
  });
});
