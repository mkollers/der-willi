import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import * as _ from 'lodash';
import * as faker from 'faker';

@Component({
  selector: 'app-track-times-dialog',
  templateUrl: './track-times-dialog.component.html',
  styleUrls: ['./track-times-dialog.component.scss']
})
export class TrackTimesDialogComponent {
  fg: FormGroup;
  track = faker.random.number({ min: 1, max: 200 });

  constructor(
    @Inject(MAT_DIALOG_DATA) public names: string[],
    private _dialogRef: MatDialogRef<TrackTimesDialogComponent>,
    private _fb: FormBuilder
  ) {
    this.initFormGroup();
  }

  private initFormGroup() {
    const controls = _.chain(this.names)
      .map((n: string) => ({ key: n, control: this._fb.control('', Validators.required) }))
      .keyBy(o => o.key)
      .mapValues(o => o.control)
      .value();

    this.fg = this._fb.group(controls);
  }

  finish(again = false) {
    console.log(this.fg.value);
    this._dialogRef.close(again);
  }
}
