import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { ISystems } from '../models/crypto.model';
import { CryptoService } from '../services/crypto-service.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent {

  public currencies: Observable<ISystems>;

  constructor(
    private cryptoService: CryptoService
  ) {
    this.currencies = this.cryptoService.getCrypto();
  }

}
