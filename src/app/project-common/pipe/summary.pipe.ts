import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'summary'
})
export class SummaryPipe implements PipeTransform {

  transform(value: string, limit?: number): string {

    if (!value || value.length < (limit || 70))
        return value;

    const actualLimit = limit ? limit : 70;
    return value.substr(0, actualLimit).trim() + '...';

}

}
