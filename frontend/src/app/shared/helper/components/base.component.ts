import { OnDestroy } from '@angular/core';

export class BaseComponent implements OnDestroy {
    protected alive = true;

    ngOnDestroy = () => this.alive = false;
}
