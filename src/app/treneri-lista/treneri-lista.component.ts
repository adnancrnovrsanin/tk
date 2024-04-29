import { DatePipe, NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { TreneriService } from '../treneri.service';
import { ProsecnaDuzinaDirective } from '../prosecna-duzina.directive';

@Component({
  selector: 'app-treneri-lista',
  standalone: true,
  imports: [
    DatePipe, 
    NgFor,
    ProsecnaDuzinaDirective
  ],
  templateUrl: './treneri-lista.component.html',
  styleUrl: './treneri-lista.component.css',
})
export class TreneriListaComponent {
  constructor(private treneriService: TreneriService) {}

  get treneri() {
    return this.treneriService.getTreneri();
  }
}
