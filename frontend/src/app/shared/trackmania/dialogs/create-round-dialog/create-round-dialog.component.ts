import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import * as faker from 'faker';

@Component({
  selector: 'app-create-round-dialog',
  templateUrl: './create-round-dialog.component.html',
  styleUrls: ['./create-round-dialog.component.scss']
})
export class CreateRoundDialogComponent {
  fg: FormGroup;
  names: string[] = [];

  constructor(private _fb: FormBuilder) {
    this.initFormGroup();
    for (let i = 0; i < faker.random.number({ min: 5, max: 30 }); i++) {
      this.names.push(faker.name.firstName());
    }
  }

  private initFormGroup() {
    this.fg = this._fb.group({
      players: this._fb.array([this.createPlayer(true), this.createPlayer(true)])
    });
  }

  private createPlayer(required = false) {
    const validators = [];
    if (required) {
      validators.push(Validators.required);
    }

    return this._fb.group({
      name: this._fb.control('', validators)
    });
  }

  addPlayer() {
    const players = this.fg.get('players') as FormArray;
    players.push(this.createPlayer());
  }
}
