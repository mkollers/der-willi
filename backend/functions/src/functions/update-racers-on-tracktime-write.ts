import * as functions from 'firebase-functions';

import { LapTime } from '../models/lap-time';
import { RacerRepository } from '../repositories/racer-repository';

export const UpdateRacersOnTracktimeWrite = functions.firestore
    .document('trackmania_times/{id}')
    .onWrite(async (event, context) => {
        const lapTime: LapTime = event.after.data() as LapTime;

        const exists = await RacerRepository.exists(lapTime.name);

        if (exists) {
            console.log(`Racer ${lapTime.name} already exists. Do nothing!`);
        } else {
            await RacerRepository.add(lapTime.name);
            console.log(`Successfully added Racer ${lapTime.name}`);
        }
    });