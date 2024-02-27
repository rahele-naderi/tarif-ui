import { Component, LOCALE_ID } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { GetTarifsService } from '../../services/get-tarifs.service';
import { AsyncPipe, CurrencyPipe, NgFor } from '@angular/common';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { combineLatest, debounceTime, map, merge, startWith } from 'rxjs';
import { Tarif } from '../../models/tarif';

@Component({
  selector: 'vrx-tarif-list',
  standalone: true,
  imports: [NgFor, AsyncPipe, CurrencyPipe, ReactiveFormsModule],
  providers: [{ provide: LOCALE_ID, useValue: 'de-DE' }],
  templateUrl: './tarif-list.component.html',
  styleUrl: './tarif-list.component.sass',
})
export class TarifListComponent {
  tarifs$;
  searchDownloadControl = new FormControl<string>('');
  searchUploadControl = new FormControl<string>('');
  searchPriceControl = new FormControl<string>('');

  constructor(getTarifService: GetTarifsService) {
    this.tarifs$ = combineLatest([
      getTarifService.getTarifs(),
      this.searchDownloadControl.valueChanges.pipe(startWith('')),
      this.searchUploadControl.valueChanges.pipe(startWith('')),
      this.searchPriceControl.valueChanges.pipe(startWith('')),
    ]).pipe(
      takeUntilDestroyed(),
      map((values) => this.filterList(values))
    );
  }

  filterList(values: [Tarif[], string | null, string | null, string | null]) {
    const [tarifs, download, upload, price] = values;
    let result = tarifs;
    if (download && !isNaN(+download)) {
      result = result.filter((res) => res.download === +download);
    }
    if (upload && !isNaN(+upload)) {
      result = result.filter((res) => res.upload === +upload);
    }
    if (price && !isNaN(+price)) {
      result = result.filter((res) => res.price === +price);
    }
    return result;
  }
}
