import { of } from 'rxjs';

export class AuthServiceMock {
    user$ = of(undefined);
    permissions$ = of({});
    forgetPassword = (email: string) => Promise.reject();
    login = (email: string, password: string) => Promise.reject();
    logout = () => Promise.reject();
    register = (email: string, password: string) => Promise.reject();
    ngOnDestroy = () => { };
}