import { Injectable } from '@angular/core';
import { Trenira } from './models/interfejsi';

@Injectable({
  providedIn: 'root',
})
export class TreniraService {
  private treniranja: Trenira[] = [
    // Primer podataka
    {
      id: 1,
      trenerId: 1,
      klubId: 101,
      sport: 'Fudbal',
      datumOd: new Date('2020-01-01'),
      datumDo: new Date('2021-01-01'),
    },
    {
      id: 2,
      trenerId: 1,
      klubId: 102,
      sport: 'Košarka',
      datumOd: new Date('2021-02-01'),
      datumDo: null,
    },
    {
      id: 3,
      trenerId: 2,
      klubId: 101,
      sport: 'Fudbal',
      datumOd: new Date('2020-03-01'),
      datumDo: new Date('2021-03-01'),
    },
    {
      id: 4,
      trenerId: 2,
      klubId: 102,
      sport: 'Košarka',
      datumOd: new Date('2021-04-01'),
      datumDo: null,
    },
    {
      id: 5,
      trenerId: 3,
      klubId: 101,
      sport: 'Fudbal',
      datumOd: new Date('2020-05-01'),
      datumDo: new Date('2021-05-01'),
    },
    {
      id: 6,
      trenerId: 3,
      klubId: 102,
      sport: 'Košarka',
      datumOd: new Date('2021-06-01'),
      datumDo: null,
    },
  ];

  constructor() {}

  getTreniranjaByTrenerId(trenerId: number): Trenira[] {
    return this.treniranja.filter((t) => t.trenerId === trenerId);
  }
}
