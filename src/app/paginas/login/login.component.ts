import { Component, OnInit, Output, EventEmitter, ViewChild } from '@angular/core';
import { UsuarioService } from 'src/app/services/usuario.service';
import { Usuario } from 'src/app/interfaces/usuario';
import { ErroComponent } from 'src/app/mensagens/erro/erro.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public usuario: Usuario;
  public usuarioLogado: Usuario;
  constructor(private usuarioService: UsuarioService) { }
  ngOnInit() {
    this.usuario = {id: null, login: null, senha: null };
  }

  verificarLogin() {
    this.usuarioService.verificarUsuario(this.usuario);
  }
}
