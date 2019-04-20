import { of } from 'rxjs';

export class AngularFireAuthMock {
    user = of(undefined);
    idTokenResult = of(undefined);
}