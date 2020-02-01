import { of } from 'rxjs';

export class AuthServiceMock {
    user$ = of(undefined);
    permissions$ = of({});
    forgotPassword = () => Promise.reject();
    login = () => Promise.reject();
    logout = () => Promise.reject();
    register = () => Promise.reject();
    ngOnDestroy = () => { };
}