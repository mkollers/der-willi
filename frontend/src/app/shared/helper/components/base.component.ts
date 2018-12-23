import { OnDestroy } from '@angular/core';

export class BaseComponent implements OnDestroy {
    protected alive = true;

    constructor() { }

    ngOnDestroy() {
        this.alive = false;
    }
}
