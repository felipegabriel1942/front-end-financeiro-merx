import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { TipoDespesa } from '../interfaces/tipo-despesa';
import { environment } from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class TipoDespesaService {

  constructor(private http: HttpClient) { }

  getListaTipoDespesa(): Observable<TipoDespesa[]> {
    const url = `${environment.merxApiUrl}/tipo-despesas`;
    return this.http.get<TipoDespesa[]>(url);
  }
}
