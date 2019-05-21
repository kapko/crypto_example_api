import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ISystems } from '../models/crypto.model';

@Injectable({
  providedIn: 'root'
})
export class CryptoService {
  api = `https://min-api.cryptocompare.com/data/pricemulti?fsyms=ETH,BTC,XRP&tsyms=USD,RUB,EUR`;

  constructor(
    private http: HttpClient
  ) {}

  public getCrypto(): Observable<ISystems> {
    return this.http.get<ISystems>(`${this.api}`);
  }

}
