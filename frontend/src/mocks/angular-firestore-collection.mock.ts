import { of } from 'rxjs';

export class AngularFirestoreCollectionMock {
    valueChanges = () => of(null);
}