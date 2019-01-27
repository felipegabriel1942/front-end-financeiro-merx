import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

import { Despesa } from '../interfaces/despesa';
import { Usuario } from '../interfaces/usuario';

import { MessageService } from 'primeng/components/common/messageservice';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class DespesaService {

  usuario: Usuario;

  constructor(private http: HttpClient,
    private messageService: MessageService,
    private router: Router) {
    this.usuario = JSON.parse(localStorage.getItem('usuarioLogado'));

  }

  getListaDespesa(): Observable<Despesa[]> {
    const url = `${environment.merxApiUrl}/despesas?usuario=${this.usuario.id}`;
    return this.http.get<Despesa[]>(url);
  }

  getDespesa(id: number): Observable<Despesa> {
    const url = `${environment.merxApiUrl}/despesas/${id}`;
    return this.http.get<Despesa>(url);
  }

  addDespesa(despesa: Despesa) {
    const url = `${environment.merxApiUrl}/despesas`;
    return this.http.post<Despesa>(url, despesa)
    .subscribe(() => {
      this.router.navigateByUrl('/listar-despesas');
      this.messageService.add({severity: 'success', summary: 'Sucesso!', detail: 'Despesa cadastrada.'});
    });
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
