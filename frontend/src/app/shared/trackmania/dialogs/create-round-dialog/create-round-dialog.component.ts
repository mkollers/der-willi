import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { BaseComponent } from '@shared/helper/components/base.component';
import * as faker from 'faker';
import storage from 'local-storage-fallback';
import * as _ from 'lodash';
import { distinctUntilChanged, map, takeWhile, tap } from 'rxjs/operators';

@Component({
  selector: 'trackmania-create-round-dialog',
  templateUrl: './create-round-dialog.component.html',
  styleUrls: ['./create-round-dialog.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CreateRoundDialogComponent extends BaseComponent {
  fg: FormGroup;
  names: string[] = [];

  constructor(
    private _dialogRef: MatDialogRef<CreateRoundDialogComponent>,
    private _fb: FormBuilder,
    private _router: Router,
    private _route: ActivatedRoute
  ) {
    super();
    this._initFormGroup();
    this._updateQueryParams();
    for (let i = 0; i < faker.random.number({ min: 5, max: 30 }); i++) {
      this.names.push(faker.name.firstName());
    }
  }

  private _updateQueryParams() {
    this.fg.get('players').valueChanges.pipe(
      takeWhile(() => this.alive),
      map((values: { name: string }[]) => _.map(values, v => v.name)),  // flatten objects
      map(names => _.filter(names, n => !!n)),                          // remove empty string from list
      map(names => names.join(',')),                                    // join to comma seperated string
      distinctUntilChanged(),
      tap(names => this._router.navigate(['.'], { queryParams: { names } })),
      tap(names => storage.setItem('names', names))
    ).subscribe();
  }

  private _initFormGroup() {
    // Prefill data from query params or localstorage
    let names: string[];
    names = this._route.snapshot.queryParams.names.split(',');

    const players = [this._createPlayer(true, names[0]), this._createPlayer(true, names[1])];
    console.log(players);

    for (let i = 2; i < names.length; i++) {
      const player = this._createPlayer(true, names[i]);
      players.push(player);
    }

    this.fg = this._fb.group({
      players: this._fb.array(players)
    });
  }

  private _createPlayer(required = false, name = '') {
    const validators = [];
    if (required) {
      validators.push(Validators.required);
    }

    return this._fb.group({
      name: this._fb.control(name, validators)
    });
  }

  addPlayer() {
    const players = this.fg.get('players') as FormArray;
    players.push(this._createPlayer());
  }

  next() {
    const players: { name: string }[] = this.fg.get('players').value;
    const names = players.map(p => p.name);
    this._dialogRef.close(names);
  }
}
