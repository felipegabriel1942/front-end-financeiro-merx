import { Component, EventEmitter } from '@angular/core';
import { DespesaService } from 'src/app/services/despesa.service';
import { Despesa } from 'src/app/interfaces/despesa';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/components/common/messageservice';


@Component({
  selector: 'app-cadastro-despesa',
  templateUrl: './cadastro-despesa.component.html',
  styleUrls: ['./cadastro-despesa.component.css']
})
export class CadastroDespesaComponent {

static mensagemSucessoCadastroDespesa = new EventEmitter<string>();


constructor(private despesaService: DespesaService) { }

 addDespesa(despesa: Despesa) {
    this.despesaService.addDespesa(despesa);
 }
}
