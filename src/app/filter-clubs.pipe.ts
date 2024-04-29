import { Pipe, PipeTransform } from '@angular/core';
import { Klub } from './models/interfejsi';

@Pipe({
  name: 'filterClubs',
  standalone: true,
})
export class FilterClubsPipe implements PipeTransform {
  transform(klubovi: Klub[], vrsta: string): Klub[] {
    return klubovi.filter(
      (klub) => klub.vrsta.toLowerCase() === vrsta.toLowerCase()
    );
  }
}
