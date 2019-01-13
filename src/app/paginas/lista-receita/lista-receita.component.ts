import { Component, OnInit } from '@angular/core';
import { ReceitaService } from 'src/app/services/receita.service';
import { Receita } from 'src/app/interfaces/receita';

@Component ({
  selector: 'app-lista-receita',
  templateUrl: './lista-receita.component.html',
  styleUrls: ['./lista-receita.component.css']
})
export class ListaReceitaComponent implements OnInit {
  public receitas: Receita[];

  constructor(private receitaService: ReceitaService) { }

  ngOnInit() {
    this.getListaReceitas();
  }

  getListaReceitas() {
    this.receitaService.getListaReceita()
    .subscribe((receitas: Receita[]) => {
      this.receitas = receitas;
    });
  }

}
