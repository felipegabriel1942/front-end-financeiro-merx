import { Component } from '@angular/core';
import { DespesaService } from 'src/app/services/despesa.service';
import { Despesa } from 'src/app/interfaces/despesa';
import { Router } from '@angular/router';


@Component({
  selector: 'app-cadastro-despesa',
  templateUrl: './cadastro-despesa.component.html',
  styleUrls: ['./cadastro-despesa.component.css']
})
export class CadastroDespesaComponent {

constructor(private despesaService: DespesaService, private router: Router) { }

 addDespesa(despesa: Despesa) {
    this.despesaService.addDespesa(despesa)
    .subscribe(
      () => { this.router.navigateByUrl('/listar-despesas'); },
      () => { console.log('Erro ao salvar despesa'); }
    );
 }

}
