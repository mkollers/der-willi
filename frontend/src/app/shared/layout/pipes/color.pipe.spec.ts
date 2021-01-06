import { ColorPipe } from './color.pipe';

describe('ColorPipe', () => {
  let pipe: ColorPipe;

  beforeEach(() => {
    pipe = new ColorPipe();
  });

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  const cases = [
    { name: 'Kolli', color: 'hsl(-203, 30%, 80%)' },
    { name: 'Willi', color: 'hsl(257, 30%, 80%)' },
    { name: 'Rupp', color: 'hsl(113, 30%, 80%)' },
    { name: undefined, color: 'hsl(85, 30%, 80%)' }
  ];

  for (const c of cases) {
    it(`should return ${c.color} for ${c.name}`, () => {
      // Act
      const color = pipe.transform(c.name);

      // Assert
      expect(color).toBe(c.color);
    });
  }
});
