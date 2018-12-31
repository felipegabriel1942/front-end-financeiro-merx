import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Despesa } from 'src/app/interfaces/despesa';
import { TipoDespesaService } from 'src/app/services/tipo-despesa.service';
import { SelectItem } from 'primeng/components/common/selectitem';
import { TipoDespesa } from 'src/app/interfaces/tipo-despesa';
import { UsuarioService } from 'src/app/services/usuario.service';
import { Usuario } from 'src/app/interfaces/usuario';



@Component({
  selector: 'app-form-despesa',
  templateUrl: './form-despesa.component.html',
  styleUrls: ['./form-despesa.component.css']
})
export class FormDespesaComponent implements OnInit {

  tipoDespesa: TipoDespesa[];
  tipoDespesaSelecionada: TipoDespesa;
  anoMes: SelectItem[];
  anoMesSelecionado: string;
  usuario: Usuario;

  constructor(private tipoDespesaService: TipoDespesaService, private usuarioService: UsuarioService) {
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

  @Input() despesa: Despesa = <Despesa>{};
  @Output() outputDespesa: EventEmitter<Despesa> = new EventEmitter();

  ngOnInit() {
    this.getListaTipoDespesas();
    this.anoMesSelecionado = '';
    this.tipoDespesaSelecionada = null;
    this.usuario = JSON.parse(localStorage.getItem('usuarioLogado'));
  }

  onSubmit() {
    this.despesa.anoMes = this.anoMesSelecionado;
    this.despesa.fkTipoDespesa = this.tipoDespesaSelecionada.id;
    this.despesa.fkUsuario = this.usuario.id;
    this.outputDespesa.emit(this.despesa);
  }

  getListaTipoDespesas() {
    this.tipoDespesaService.getListaTipoDespesa()
    .subscribe((tipoDespesa: TipoDespesa[]) => {
      this.tipoDespesa = tipoDespesa;
    });
  }

}
