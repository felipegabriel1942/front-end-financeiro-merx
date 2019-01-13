import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { SelectItem } from 'primeng/components/common/selectitem';
import { Usuario } from 'src/app/interfaces/usuario';
import { ReceitaService } from 'src/app/services/receita.service';
import { Receita } from 'src/app/interfaces/receita';


@Component({
  selector: 'app-form-receita',
  templateUrl: './form-receita.component.html',
  styleUrls: ['./form-receita.component.css']
})
export class FormReceitaComponent implements OnInit {

  anoMes: SelectItem[];
  usuario: Usuario;

  constructor(private receitaService: ReceitaService) {
    this.anoMes = [
      {label: '2018-01', value: '2018-01'},
      {label: '2018-02', value: '2018-02'},
      {label: '2018-03', value: '2018-03'},
      {label: '2018-04', value: '2018-04'},
      {label: '2018-05', value: '2018-05'},
      {label: '2018-06', value: '2018-06'},
      {label: '2018-07', value: '2018-07'},
      {label: '2018-08', value: '2018-08'},
      {label: '2018-09', value: '2018-09'},
      {label: '2018-10', value: '2018-10'},
      {label: '2018-11', value: '2018-11'},
      {label: '2018-12', value: '2018-12'}
    ];
   }

   @Input() receita: Receita = <Receita>{};
   @Input() anoMesSelecionado;
   @Output() outputReceita: EventEmitter<Receita> = new EventEmitter();

  ngOnInit() {
    this.receita = {id: null, descricao: null, valor: null, codigoUsuario: null, anoMes: null };
    this.usuario = JSON.parse(localStorage.getItem('usuarioLogado'));
  }

  onSubmit() {
    this.receita.anoMes = this.anoMesSelecionado;
    this.receita.codigoUsuario = this.usuario.id;
    this.outputReceita.emit(this.receita);
  }
}
