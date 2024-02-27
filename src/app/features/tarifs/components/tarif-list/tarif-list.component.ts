import { Component, LOCALE_ID } from '@angular/core';
import { GetTarifsService } from '../../services/get-tarifs.service';
import { AsyncPipe, CurrencyPipe, NgFor } from '@angular/common';

@Component({
  selector: 'vrx-tarif-list',
  standalone: true,
  imports: [NgFor, AsyncPipe, CurrencyPipe],
  providers: [ { provide: LOCALE_ID, useValue: 'de-DE' } ],
  templateUrl: './tarif-list.component.html',
  styleUrl: './tarif-list.component.sass'
})
export class TarifListComponent {
  tarifs$;

  constructor(getTarifService: GetTarifsService) {
    this.tarifs$ = getTarifService.getTarifs();
  }
}
