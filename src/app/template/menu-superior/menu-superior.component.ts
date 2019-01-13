import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-menu-superior',
  templateUrl: './menu-superior.component.html',
  styleUrls: ['./menu-superior.component.css']
})
export class MenuSuperiorComponent implements OnInit {
  @Output() onToggle = new EventEmitter;
  constructor(private usuarioService: UsuarioService) { }

  ngOnInit() {
  }

  deslogarSistema() {
    this.usuarioService.deslogarUsuario();
  }

  disparaEvento() {
    this.onToggle.emit();
  }
}
