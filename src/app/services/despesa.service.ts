import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

import { Despesa } from '../interfaces/despesa';

@Injectable({
  providedIn: 'root'
})
export class DespesaService {

  constructor(private http: HttpClient) { }

  getListaDespesa(): Observable<Despesa[]> {
    const url = `${environment.merxApiUrl}/despesas`;
    return this.http.get<Despesa[]>(url);
  }

  addDespesa(despesa: Despesa): Observable<Despesa> {
    const url = `${environment.merxApiUrl}/despesas`;
    return this.http.post<Despesa>(url, despesa);
  }
}
