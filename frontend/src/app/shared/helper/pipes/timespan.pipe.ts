import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timespan'
})
export class TimespanPipe implements PipeTransform {

  transform(value: number): string {
    const ms = (value % 1000).toFixed(0).toString().padStart(3, '0');
    const s = ((value / 1000) % 100).toFixed(0).toString().padStart(2, '0');
    const m = ((value / 100000) % 100).toFixed(0).toString().padStart(2, '0');
    return `${m}:${s},${ms}`;
  }

}
