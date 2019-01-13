import { Injectable, EventEmitter, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Usuario } from '../interfaces/usuario';
import { environment } from 'src/environments/environment';
import { ErroComponent } from '../mensagens/erro/erro.component';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  @ViewChild(ErroComponent) erroMsgComponent: ErroComponent;
  logarEmitter: EventEmitter<boolean> = new EventEmitter();
  deslogarEmitter: EventEmitter<boolean> = new EventEmitter();

  public usuario: Usuario;
  constructor(private http: HttpClient,
    private router: Router) { }

  verificarUsuario(usuario: Usuario) {
    const url = `${environment.merxApiUrl}/usuarios?login=${usuario.login}&senha=${usuario.senha}`;
    return this.http.get<Usuario>(url)
    .subscribe((dados: Usuario) => {
              localStorage.setItem('usuarioLogado', JSON.stringify(dados));
              this.logarEmitter.emit(true);
              this.router.navigateByUrl('/home'); },
        () => {console.log('Login ou senha inválidos'); }
    );
  }

  deslogarUsuario() {
    this.logarEmitter.emit(false);
  }
}
