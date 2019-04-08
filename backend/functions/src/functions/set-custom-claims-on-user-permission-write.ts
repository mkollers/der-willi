import * as admin from 'firebase-admin';
import * as functions from 'firebase-functions';
import * as _ from 'lodash';

import { User } from '../models/user';
import { MetadataRepository } from '../repositories/metadata-repository';

export const SetCustomClaimsOnUserPermissionWrite = functions.firestore
    .document('users/{uid}')
    .onWrite(async (event, context) => {
        const uid: string = context.params.uid;
        const user: User = event.after.data() as User;

        const value = {
            'https://www.der-willi.de/permissions': user.permissions || {}
        };

        await admin.auth().setCustomUserClaims(uid, value);
        await MetadataRepository.enforceTokenRefresh(uid);

        console.log(`Set permissions for ${user.forename} ${user.surname}:`, _.keys(user.permissions));
    });