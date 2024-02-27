import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Tarif } from '../models/tarif';

@Injectable({
  providedIn: 'root'
})
export class GetTarifsService {

  constructor(private readonly httpClient: HttpClient) { }

  getTarifs() {
    return this.httpClient.get<Tarif[]>('assets/tarifs-mock-data.json');
  }
}
