import { Injectable } from '@angular/core';
import { Usuario } from '../interfaces/usuario';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Receita } from '../interfaces/receita';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ReceitaService {

  usuario: Usuario;
  constructor(private http: HttpClient) {
    this.usuario = JSON.parse(localStorage.getItem('usuarioLogado'));
  }

  getListaReceita(): Observable<Receita[]> {
    const url = `${environment.merxApiUrl}/receitas?usuario=${this.usuario.id}`;
    return this.http.get<Receita[]>(url);
  }

  addReceita(receita: Receita): Observable<Receita> {
    const url = `${environment.merxApiUrl}/receitas`;
    return this.http.post<Receita>(url, receita);
  }
}
