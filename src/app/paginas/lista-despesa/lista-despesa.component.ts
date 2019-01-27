import { Component, OnInit } from '@angular/core';


import { Despesa } from 'src/app/interfaces/despesa';
import { DespesaService } from '../../services/despesa.service';
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
  }

  ngOnInit() {
    this.getListaDespesas();
  }

  getListaDespesas() {
    this.despesaService.getListaDespesa()
    .subscribe((despesas: Despesa[]) => {
      this.despesas = despesas;
    });
  }

  deletaDespesa(id: number) {
    this.despesaService.deletaDespesa(id)
    .subscribe(() => {
      this.getListaDespesas();
      this.messageService.add({severity: 'success', summary: 'Sucesso!', detail: 'Despesa Excluída.'});
    });
  }
}
