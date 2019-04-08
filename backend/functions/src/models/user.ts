import { Dictionary } from 'lodash';

export interface User {
    forename: string;
    surname: string;
    permissions: Dictionary<string>;
}