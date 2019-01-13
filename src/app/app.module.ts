import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { ListaDespesaComponent } from './paginas/lista-despesa/lista-despesa.component';
import { MenuLateralComponent } from './template/menu-lateral/menu-lateral.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './paginas/home/home.component';
import { MenuSuperiorComponent } from './template/menu-superior/menu-superior.component';
import { CadastroDespesaComponent } from './paginas/cadastro-despesa/cadastro-despesa.component';
import { FormDespesaComponent } from './compartilhado/form-despesa/form-despesa.component';
import { TipoDespesaService } from './services/tipo-despesa.service';
import { LoginComponent } from './paginas/login/login.component';
import { DespesaService } from './services/despesa.service';
import { UsuarioService } from './services/usuario.service';

import { TableModule } from 'primeng/table';
import { DropdownModule } from 'primeng/dropdown';
import { PanelModule } from 'primeng/panel';
import { CardModule } from 'primeng/card';
import { SidebarModule } from 'primeng/sidebar';
import { ErroComponent } from './mensagens/erro/erro.component';
import { EditarDespesaComponent } from './paginas/editar-despesa/editar-despesa.component';


@NgModule({
  declarations: [
    AppComponent,
    ListaDespesaComponent,
    MenuLateralComponent,
    HomeComponent,
    MenuSuperiorComponent,
    CadastroDespesaComponent,
    FormDespesaComponent,
    LoginComponent,
    ErroComponent,
    EditarDespesaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    TableModule,
    FormsModule,
    DropdownModule,
    BrowserAnimationsModule,
    PanelModule,
    CardModule,
    SidebarModule
  ],
  providers: [TipoDespesaService, DespesaService, UsuarioService],
  bootstrap: [AppComponent]
})
export class AppModule { }
