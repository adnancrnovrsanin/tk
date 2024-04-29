export interface Trener {
  id: number;
  ime: string;
  prezime: string;
  pol: string;
  telefon: string;
  datumRodjenja: string;
  mestoRodjenja: string;
}

export interface Klub {
  id: number;
  naziv: string;
  vrsta: 'privatni' | 'državni'; // Može biti ili 'privatni' ili 'državni'
  datumOsnivanja: string; // Datum u ISO formatu, npr. "1990-12-31"
  kapacitet: number; // Maksimalan broj sportova
}

export interface Trenira {
  id: number;
  trenerId: number;
  klubId: number;
  sport: string;
  datumOd: Date;
  datumDo: Date | null; // null ako je angažman aktivan
}
