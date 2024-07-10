import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CheckboxModule } from 'primeng/checkbox';
import { AppRoutingModule } from './app-routing.module';
// angular material
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatCardModule} from '@angular/material/card';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
// primeng
import { SidebarModule } from 'primeng/sidebar';
import { ButtonModule } from 'primeng/button';
import { PrimeIcons,  } from 'primeng/api';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './pages/login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { InicialComponent } from './pages/inicial/inicial.component';
import { Routes, RouterModule } from '@angular/router';
import { TableModule } from 'primeng/table';
import { HttpClientModule } from '@angular/common/http';
import { TabelaComponent } from './components/tabela/tabela.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { ExcluirClienteComponent } from './components/excluir-cliente/excluir-cliente.component';
import {MatDialogModule} from '@angular/material/dialog';
import { EditarClienteComponent } from './components/editar-cliente/editar-cliente.component';
import { FormsModule } from '@angular/forms'; // Importe FormsModule aqui
import { CriarClienteComponent } from './components/criar-cliente/criar-cliente.component';




@NgModule({
  declarations: [		
    AppComponent,
      LoginComponent,
      InicialComponent,
      TabelaComponent,
      SidebarComponent,
      ExcluirClienteComponent,
      EditarClienteComponent,
      CriarClienteComponent
      
   ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatSlideToggleModule,
CheckboxModule,
MatDatepickerModule,
MatFormFieldModule,
MatCardModule,
ReactiveFormsModule,
MatInputModule,
MatButtonModule,
RouterModule,
AppRoutingModule,
SidebarModule,
ButtonModule,
TableModule,
HttpClientModule,
MatDialogModule,
FormsModule 







  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
