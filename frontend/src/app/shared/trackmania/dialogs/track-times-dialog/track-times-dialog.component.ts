import { ChangeDetectionStrategy, Component, Inject, InjectionToken } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import * as faker from 'faker';
import * as _ from 'lodash';

export const MAX_TRACK = new InjectionToken<string>('MAX_TRACK');

@Component({
  selector: 'trackmania-track-times-dialog',
  templateUrl: './track-times-dialog.component.html',
  styleUrls: ['./track-times-dialog.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TrackTimesDialogComponent {
  fg: FormGroup;
  track: number;
  mask = [/[0-5]/, /[0-9]/, ':', /[0-5]/, /[0-9]/, ',', /\d/, /\d/, /\d/];

  constructor(
    @Inject(MAT_DIALOG_DATA) public names: string[],
    @Inject(MAX_TRACK) maxTrack: number,
    private _dialogRef: MatDialogRef<TrackTimesDialogComponent>,
    private _fb: FormBuilder
  ) {
    this.initFormGroup();
    this.track = faker.random.number({ min: 1, max: maxTrack });
  }

  private initFormGroup() {
    const controls = _.chain(this.names)
      .map((n: string) => ({ key: n, control: this._fb.control('00:00,000', Validators.required) }))
      .keyBy(o => o.key)
      .mapValues(o => o.control)
      .value();

    this.fg = this._fb.group(controls);
  }

  finish(again = false) {
    console.log(this.fg.value);
    this._dialogRef.close(again);
  }

  select($event: any) {
    $event.target.select();
    setTimeout(() => { // Safari hack
      $event.target.select();
      $event.target.setSelectionRange(0, 99999);
    }, 0);
  }
}
