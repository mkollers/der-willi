import { of } from 'rxjs';

export class MatDialogRefMock {
    afterClosed = () => of(null);
    close = () => this;
    beforeClosed = () => of(null);
}