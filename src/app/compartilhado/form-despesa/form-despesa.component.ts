import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Despesa } from 'src/app/interfaces/despesa';
import { TipoDespesaService } from 'src/app/services/tipo-despesa.service';
import { SelectItem } from 'primeng/components/common/selectitem';
import { TipoDespesa } from 'src/app/interfaces/tipo-despesa';


@Component({
  selector: 'app-form-despesa',
  templateUrl: './form-despesa.component.html',
  styleUrls: ['./form-despesa.component.css']
})
export class FormDespesaComponent implements OnInit {

  tipoDespesa: TipoDespesa[];
  tipoDespesaSelecionada: TipoDespesa;

  constructor(private tipoDespesaService: TipoDespesaService) {}

  @Input() despesa: Despesa = <Despesa>{};
  @Output() outputDespesa: EventEmitter<Despesa> = new EventEmitter();


  ngOnInit() {
    this.getListaTipoDespesas();
  }

  onSubmit() {
    this.outputDespesa.emit(this.despesa);
  }

  getListaTipoDespesas() {
    this.tipoDespesaService.getListaTipoDespesa()
    .subscribe((tipoDespesa: TipoDespesa[]) => {
      this.tipoDespesa = tipoDespesa;
    });
  }

}
