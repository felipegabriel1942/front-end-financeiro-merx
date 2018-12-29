import { Component } from '@angular/core';
import { DespesaService } from 'src/app/services/despesa.service';
import { Despesa } from 'src/app/interfaces/despesa';


@Component({
  selector: 'app-cadastro-despesa',
  templateUrl: './cadastro-despesa.component.html',
  styleUrls: ['./cadastro-despesa.component.css']
})
export class CadastroDespesaComponent {

constructor(private despesaService: DespesaService) { }

 salvarDespesa(despesa: Despesa) {
  
 }

}
