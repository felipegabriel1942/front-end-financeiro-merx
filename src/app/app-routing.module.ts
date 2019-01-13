import { NgModule } from '@angular/core';
import { ListaDespesaComponent } from './paginas/lista-despesa/lista-despesa.component';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './paginas/home/home.component';
import { CadastroDespesaComponent } from './paginas/cadastro-despesa/cadastro-despesa.component';
import { LoginComponent } from './paginas/login/login.component';
import { EditarDespesaComponent } from './paginas/editar-despesa/editar-despesa.component';
import { ListaReceitaComponent } from './paginas/lista-receita/lista-receita.component';
import { CadastroReceitaComponent } from './paginas/cadastro-receita/cadastro-receita.component';

const routes = [
  {path: '', component: LoginComponent},
  {path: 'home', component: HomeComponent},
  {path: 'listar-despesas/cadastro', component: CadastroDespesaComponent},
  {path: 'listar-receitas/cadastro', component: CadastroReceitaComponent},
  {path: 'listar-receitas', component: ListaReceitaComponent},
  {path: 'listar-despesas', component: ListaDespesaComponent},
  {path: 'login', component: LoginComponent},
  {path: 'listar-despesas/editar', component: EditarDespesaComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
