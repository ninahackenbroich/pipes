import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'convert'
})
export class ConvertPipe implements PipeTransform {

  transform(value: any, valueUnit: string): number {
    // TODO: convert miles to kilometers
    if (!value) {
      return 0;
    }
    const numericValue = typeof value === 'string' ? parseFloat(value) : value;

    switch (valueUnit) {
      case 'km':
        return numericValue * 1.60934;
      case 'm':
        return numericValue * 1.60934 * 1000;
      case 'cm':
        return numericValue * 1.60934 * 1000 * 100;
      default:
        throw new Error("Unit not implemented.");
    }
  }
}
