import { Directive, HostBinding, Input, SimpleChanges } from '@angular/core';
import { TreniraService } from './trenira.service';

@Directive({
  selector: '[appProsecnaDuzina]',
  standalone: true,
})
export class ProsecnaDuzinaDirective {
  @Input() trenerId!: number;
  @HostBinding('innerText') text: string = '';

  constructor(private treniraService: TreniraService) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['trenerId']) {
      this.calculateAverageDuration();
    }
  }

  private calculateAverageDuration(): void {
    const treniranja = this.treniraService.getTreniranjaByTrenerId(
      this.trenerId
    );
    let totalDays = 0;
    let count = 0;

    treniranja.forEach((t) => {
      const start = t.datumOd;
      const end = t.datumDo || new Date(); // Ako je datumDo null, koristimo trenutni datum
      const diff = (end.getTime() - start.getTime()) / (1000 * 3600 * 24); // Razlika u danima
      totalDays += diff;
      count++;
    });

    const average = count > 0 ? totalDays / count : 0;
    this.text = `Prosečna dužina: ${Math.round(average)} dana`;
  }
}
