import { of } from 'rxjs';

export class MatDialogRefMock {
    close = () => this;
    beforeClosed = () => of(null);
}