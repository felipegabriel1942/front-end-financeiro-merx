import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/interfaces/usuario';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  usuario: Usuario;
  constructor() {
    this.usuario = JSON.parse(localStorage.getItem('usuarioLogado'));
  }

  ngOnInit() {}

}
