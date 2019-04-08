import { SetCustomClaimsOnUserPermissionWrite } from './functions/set-custom-claims-on-user-permission-write';
import { initialize } from './initialize';

initialize();

// ----- SECURITY
exports.SetCustomClaimsOnUserPermissionWrite = SetCustomClaimsOnUserPermissionWrite;
