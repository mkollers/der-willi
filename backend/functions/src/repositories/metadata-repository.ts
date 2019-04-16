import * as admin from 'firebase-admin';

export class MetadataRepository {
    static enforceTokenRefresh(uid: string) {
        return new Promise<void>(async (resolve, reject) => {
            // Update real-time database to notify client to force refresh.
            const metadataRef = admin.firestore().doc(`metadata/${uid}`);
            // Set the refresh time to the current UTC timestamp.
            // This will be captured on the client to force a token refresh.
            await metadataRef.set({ refreshTime: new Date().toUTCString() });
            resolve();
        });
    }
}