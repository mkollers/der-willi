import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private _db: AngularFirestore
  ) { }

  getUser(uid: string) {
    return this._db.collection<User>('users').doc<User>(uid).valueChanges();
  }

  create(uid: string, user: User) {
    return this._db.collection<User>('users').doc(uid).set(user);
  }
}
