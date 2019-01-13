import { Component, OnInit } from '@angular/core';
import { ReceitaService } from 'src/app/services/receita.service';
import { Router } from '@angular/router';
import { Receita } from 'src/app/interfaces/receita';

@Component({
  selector: 'app-cadastro-receita',
  templateUrl: './cadastro-receita.component.html',
  styleUrls: ['./cadastro-receita.component.css']
})
export class CadastroReceitaComponent {

  constructor(private receitaService: ReceitaService, private router: Router) { }

  addReceita(receita: Receita) {
    this.receitaService.addReceita(receita)
    .subscribe(
      () => { this.router.navigateByUrl('/listar-receitas'); },
      () => { console.log('Erro ao salvar receita'); }
    );
 }

}
