import { ChangeDetectionStrategy, Component, Inject, InjectionToken } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { LapTime } from '@shared/data-access/models/lap-time';
import { LapTimeService } from '@shared/data-access/services/lap-time.service';

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
  mask = [/[0-5]/, /[0-9]/, ':', /[0-5]/, /[0-9]/, ',', /\d/, /\d/];

  constructor(
    @Inject(MAT_DIALOG_DATA) public names: string[],
    @Inject(MAX_TRACK) maxTrack: number,
    private _dialogRef: MatDialogRef<TrackTimesDialogComponent>,
    private _fb: FormBuilder,
    private _lapTimeService: LapTimeService,
    route: ActivatedRoute
  ) {
    this.initFormGroup();
    this.track = +route.snapshot.queryParams.trackid || Math.floor(Math.random() * (maxTrack - 1 + 1) + 1);
  }

  private initFormGroup() {
    const controls: { [key: string]: FormControl } = {};
    for (const name of this.names) {
      controls[name] = this._fb.control('00:00,00', Validators.required);
    }

    this.fg = this._fb.group(controls);
  }

  getCssGridRows() {
    const rows: number = this.names.length + 1;
    return new Array(rows).fill('auto').join(' ') + ' 1fr';
  }

  async finish(again = false) { // TODO: show loading animation
    const promises = [];
    // tslint:disable-next-line: forin
    for (const name in this.fg.value) {
      const value: string = this.fg.value[name];

      // Do not save default values
      if (value === '00:00,00') {
        continue;
      }

      const p = this._lapTimeService.create(this.track, new LapTime(name, this.fg.value[name]));
      promises.push(p);
    }
    await Promise.all(promises);
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
