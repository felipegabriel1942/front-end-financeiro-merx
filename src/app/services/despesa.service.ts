import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

import { Despesa } from '../interfaces/despesa';
import { Usuario } from '../interfaces/usuario';

@Injectable({
  providedIn: 'root'
})
export class DespesaService {

  usuario: Usuario;

  constructor(private http: HttpClient) {
    this.usuario = JSON.parse(localStorage.getItem('usuarioLogado'));

  }

  getListaDespesa(): Observable<Despesa[]> {
    const url = `${environment.merxApiUrl}/despesas?usuario=${this.usuario.id}`;
    return this.http.get<Despesa[]>(url);
  }

  getDespesa(id: number): Observable<Despesa> {
    const url = `${environment.merxApiUrl}/despesas/${id}`;
    console.log(url);
    return this.http.get<Despesa>(url);
  }

  addDespesa(despesa: Despesa): Observable<Despesa> {
    const url = `${environment.merxApiUrl}/despesas`;
    return this.http.post<Despesa>(url, despesa);
  }

  deletaDespesa(id: number): Observable<Despesa> {
    const url = `${environment.merxApiUrl}/despesas/${id}`;
    return this.http.delete<Despesa>(url);
  }

  atualizarDespesa(despesa: Despesa): Observable<Despesa> {
    const url = `${environment.merxApiUrl}/despesas`;
    return this.http.put<Despesa>(url, despesa);
  }
}
