import {Pipe, PipeTransform} from '@angular/core';

import {ValidationErrors} from '@angular/forms';

@Pipe({
  name: 'mergeErrors'
})
export class MergeErrorsPipe implements PipeTransform {
  transform(...errors: ValidationErrors[]): unknown {
    return errors.reduce(
      (errors, error) => ({...errors, ...error}),
      {}
    );
  }
}
