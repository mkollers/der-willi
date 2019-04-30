import { SetCustomClaimsOnUserPermissionWrite } from './functions/set-custom-claims-on-user-permission-write';
import { UpdateRacersOnTracktimeWrite } from './functions/update-racers-on-tracktime-write';
import { initialize } from './initialize';

initialize();

// ----- SECURITY
exports.SetCustomClaimsOnUserPermissionWrite = SetCustomClaimsOnUserPermissionWrite;

// ----- TRACKMANIA
exports.UpdateRacersOnTracktimeWrite = UpdateRacersOnTracktimeWrite;
