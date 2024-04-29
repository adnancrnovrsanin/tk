import { Injectable } from '@angular/core';
import { Trener } from './models/interfejsi';

@Injectable({
  providedIn: 'root',
})
export class TreneriService {
  private treneri: Trener[] = [
    {
      id: 1,
      ime: 'Marko',
      prezime: 'Marković',
      pol: 'M',
      telefon: '123-456',
      datumRodjenja: '1985-04-15',
      mestoRodjenja: 'Beograd',
    },
    {
      id: 2,
      ime: 'Jovana',
      prezime: 'Jovanović',
      pol: 'Ž',
      telefon: '456-789',
      datumRodjenja: '1989-12-31',
      mestoRodjenja: 'Novi Sad',
    },
    {
      id: 3,
      ime: 'Nikola',
      prezime: 'Nikolić',
      pol: 'M',
      telefon: '789-123',
      datumRodjenja: '1987-07-25',
      mestoRodjenja: 'Niš',
    },
  ];

  constructor() {}

  getTreneri(): Trener[] {
    return this.treneri;
  }
}
