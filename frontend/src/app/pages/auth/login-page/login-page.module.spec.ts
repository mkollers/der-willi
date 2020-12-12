import { LoginPageModule } from './login-page.module';

describe('LoginPageModule', () => {
  it('should create', () => {
    // Act
    const module = new LoginPageModule();

    // Assert
    expect(module).toBeTruthy();
  });
});