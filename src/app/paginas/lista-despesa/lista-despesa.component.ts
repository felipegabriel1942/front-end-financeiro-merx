import { Component, OnInit } from '@angular/core';


import { Despesa } from 'src/app/interfaces/despesa';
import { DespesaService } from '../../services/despesa.service';
import { CadastroDespesaComponent } from '../cadastro-despesa/cadastro-despesa.component';
import { MessageService } from 'primeng/components/common/messageservice';

@Component({
  selector: 'app-lista-despesa',
  templateUrl: './lista-despesa.component.html',
  styleUrls: ['./lista-despesa.component.css']
})
export class ListaDespesaComponent implements OnInit {

  public despesas: Despesa[];

  constructor(private despesaService: DespesaService,
    private messageService: MessageService) {
      this.messageService.add({severity: 'success', summary: 'Sucesso!', detail: 'Despesa cadastrada com sucesso.'});
    }

  ngOnInit() {
    this.getListaDespesas();
    CadastroDespesaComponent.mensagemSucessoCadastroDespesa.subscribe(
      (msgEnviada) => {
        if (msgEnviada == 'sucesso') {
          this.getRepostaCadastroDespesa();
        }
      });
      this.showSuccess();
      this.messageService.add({severity: 'success', summary: 'Sucesso!', detail: 'Despesa cadastrada com sucesso.'});
  }

  showSuccess() {
    this.messageService.add({severity:'success', summary: 'Success Message', detail:'Order submitted'});
  }


  getListaDespesas() {
    this.messageService.add({severity: 'success', summary: 'Sucesso!', detail: 'Despesa cadastrada com sucesso.'});
    this.despesaService.getListaDespesa()
    .subscribe((despesas: Despesa[]) => {
      this.despesas = despesas;
    });
  }

  deletaDespesa(id: number) {
    this.despesaService.deletaDespesa(id)
    .subscribe(() => {
      this.getListaDespesas();
    });
  }

  getRepostaCadastroDespesa() {
    console.log('chegou no metodo?');
    this.messageService.add({severity: 'success', summary: 'Sucesso!', detail: 'Despesa cadastrada com sucesso.'});
  }
}
