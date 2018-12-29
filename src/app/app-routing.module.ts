import { NgModule } from '@angular/core';
import { ListaDespesaComponent } from './paginas/lista-despesa/lista-despesa.component';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './paginas/home/home.component';
import { CadastroDespesaComponent } from './paginas/cadastro-despesa/cadastro-despesa.component';

const routes = [
  {path: '', component: HomeComponent},
  {path: 'listar-despesas/cadastro', component: CadastroDespesaComponent},
  {path: 'listar-despesas', component: ListaDespesaComponent},
  {path: '**', redirectTo: '/home'}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
