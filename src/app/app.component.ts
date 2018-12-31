import { Component, OnInit } from '@angular/core';
import { UsuarioService } from './services/usuario.service';
import { Usuario } from './interfaces/usuario';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'gerenciador-financeiro-merx';
  logar = false;
  public usuario: Usuario;

  constructor(private usuarioService: UsuarioService) {}

  ngOnInit() {
     this.usuarioService.logarEmitter.subscribe(
     logarSistema => this.logar = logarSistema);
  }
}
