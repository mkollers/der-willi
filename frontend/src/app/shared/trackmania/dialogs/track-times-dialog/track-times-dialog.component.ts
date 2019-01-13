import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-track-times-dialog',
  templateUrl: './track-times-dialog.component.html',
  styleUrls: ['./track-times-dialog.component.scss']
})
export class TrackTimesDialogComponent {
  fg: FormGroup;

  constructor(
    private _dialogRef: MatDialogRef<TrackTimesDialogComponent>,
    private _fb: FormBuilder
  ) {
    this.initFormGroup();
  }

  private initFormGroup() {
    this.fg = this._fb.group({
      times: this._fb.array([])
    });
  }

  finish() {

  }
}
