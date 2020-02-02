import { HasPermissionPipe } from './has-permission.pipe';

describe('HasPermissionPipe', () => {
  it('create an instance', () => {
    const pipe = new HasPermissionPipe(null);
    expect(pipe).toBeTruthy();
  });
});
