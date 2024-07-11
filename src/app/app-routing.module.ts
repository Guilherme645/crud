import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { InicialComponent } from './pages/inicial/inicial.component';
import { ExcluirClienteComponent } from './components/excluir-cliente/excluir-cliente.component';
import { ClientesComponent } from './pages/clientes/clientes.component';

const routes: Routes = [

  { path: '', redirectTo: '/login', pathMatch: 'full'},
  {
    path: 'login',
    component:LoginComponent
  },
  {
    path: 'inicial',
    component:InicialComponent
  },
  {
    path: 'src/app/components/excluir-cliente/:id',
    component:ExcluirClienteComponent
  },
  {
    path: 'clientes',
    component:ClientesComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
