import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'FrNumberTMB' })
export class FrNumberTMB implements PipeTransform {
  transform(value: number, ...args: any[]):string{

    return (value / (1024 * 1024)).toFixed(2) + 'MB';
  };
}
