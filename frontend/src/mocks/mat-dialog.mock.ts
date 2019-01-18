import { of } from 'rxjs';

export class MatDialogMock {
    open = () => ({ afterClosed: () => of(null) });
}