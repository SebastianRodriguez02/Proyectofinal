import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdmiUsersComponent } from './components/admi/admi-users/admi-users.component';
import { GestionProductosComponent } from './components/admi/gestion-productos/gestion-productos.component';
import { GatosComponent } from './components/gatos/gatos.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { PerrosComponent } from './components/perros/perros.component';

const routes: Routes = [
  {path: '', component:InicioComponent},
  {path: 'perros', component:PerrosComponent},
  {path: 'gatos', component:GatosComponent},
  {path:"creacionproducto",component:GestionProductosComponent},
  {path:"administrador",component:AdmiUsersComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
