import { AngularFirestoreCollectionMock } from './angular-firestore-collection.mock';

export class AngularFirestoreMock {
    collection = () => new AngularFirestoreCollectionMock();
}