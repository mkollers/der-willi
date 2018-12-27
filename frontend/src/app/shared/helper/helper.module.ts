import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimespanPipe } from './pipes/timespan.pipe';

@NgModule({
  declarations: [TimespanPipe],
  imports: [
    CommonModule
  ], exports: [
    TimespanPipe
  ]
})
export class HelperModule { }
