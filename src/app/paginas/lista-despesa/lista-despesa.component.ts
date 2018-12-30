import { Component, OnInit } from '@angular/core';


import { Despesa } from 'src/app/interfaces/despesa';
import { DespesaService } from '../../services/despesa.service';

@Component({
  selector: 'app-lista-despesa',
  templateUrl: './lista-despesa.component.html',
  styleUrls: ['./lista-despesa.component.css']
})
export class ListaDespesaComponent implements OnInit {

  public despesas: Despesa[];

  constructor(private despesaService: DespesaService) { }

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
    });
  }


}
