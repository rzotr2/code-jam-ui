import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mergeObjects'
})
export class MergeObjectsPipe implements PipeTransform {

  transform(...args: Object[]): Object {
    return args.reduce((acc, item) => {
      return {...acc, ...item};
    }, {});
  }

}
