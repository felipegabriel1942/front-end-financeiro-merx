import { Component, OnInit } from '@angular/core';
import { Despesa } from 'src/app/interfaces/despesa';
import { DespesaService } from 'src/app/services/despesa.service';
import { ActivatedRoute, Router } from '@angular/router';
import { TipoDespesa } from 'src/app/interfaces/tipo-despesa';
import { TipoDespesaService } from 'src/app/services/tipo-despesa.service';

@Component ({
  selector: 'app-editar-despesa',
  templateUrl: './editar-despesa.component.html',
  styleUrls: ['./editar-despesa.component.css']
})
export class EditarDespesaComponent implements OnInit {
  public despesa: Despesa;
  public anoMes: string;
  public tipoDespesa: TipoDespesa;
  fkTipoDespesa: number;
  id: number;
  constructor(private despesaService: DespesaService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private tipoDespesaService: TipoDespesaService) {
  
   }

  ngOnInit() {
      this.activatedRoute.queryParams.subscribe(params => {console.log(params);
        this.id = params['id'];
        this.fkTipoDespesa = params['idTipoDespesa'];
      });
      this.getDespesa(this.id);
      this.getTipoDespesa(this.fkTipoDespesa);
  }

  getDespesa(id: number) {
    this.despesaService.getDespesa(id)
    .subscribe((despesa: Despesa) =>  {
      this.despesa = despesa;
      this.anoMes = this.despesa.anoMes;
      this.fkTipoDespesa = this.despesa.fkTipoDespesa;
    });
  }

  getTipoDespesa(id: number) {
    this.tipoDespesaService.getTipoDespesa(id)
    .subscribe((tipoDespesa: TipoDespesa) => {
      this.tipoDespesa = tipoDespesa;
    });
  }

  atualizarDespesa(despesa: Despesa) {
    this.despesaService.atualizarDespesa(despesa)
    .subscribe(
      () => {this.router.navigateByUrl('listar-despesas'); }
    );
  }
}
