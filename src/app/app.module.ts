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

import { TableModule } from 'primeng/table';
import { DropdownModule } from 'primeng/dropdown';
import { PanelModule } from 'primeng/panel';
import { CardModule } from 'primeng/card';

@NgModule({
  declarations: [
    AppComponent,
    ListaDespesaComponent,
    MenuLateralComponent,
    HomeComponent,
    MenuSuperiorComponent,
    CadastroDespesaComponent,
    FormDespesaComponent
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
    CardModule
  ],
  providers: [TipoDespesaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
