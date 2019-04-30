import * as admin from 'firebase-admin';

export class RacerRepository {
    static add(name: string) {
        return new Promise<void>(async (resolve, reject) => {
            const racersRef = admin.firestore().collection(`trackmania_racers`);

            await racersRef.add({ name });
            resolve();
        });
    }

    static exists(name: string) {
        return new Promise<boolean>(async (resolve, reject) => {
            const racersRef = admin.firestore().collection(`trackmania_racers`);

            const racer = await racersRef.where('name', '==', name).get();
            resolve(!racer.empty);
        });
    }
}