import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdmiUsersComponent } from './components/admi/admi-users/admi-users.component';
import { GestionContactoComponent } from './components/admi/gestion-contacto/gestion-contacto.component';
import { GestionProductosComponent } from './components/admi/gestion-productos/gestion-productos.component';
import { ListaContactosComponent } from './components/admi/lista-contactos/lista-contactos.component';
import { ListaProductosComponent } from './components/admi/lista-productos/lista-productos.component';
import { GatosComponent } from './components/gatos/gatos.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { PerrosComponent } from './components/perros/perros.component';


const routes: Routes = [
  {path: '', component:InicioComponent},
  {path: 'perros', component:PerrosComponent},
  {path: 'gatos', component:GatosComponent},
  {path: 'creacionproducto', component:GestionProductosComponent},
  {path: 'editarproducto/:id', component:GestionProductosComponent},
  {path:"administrador",component:AdmiUsersComponent},
  {path:"listaproductos",component:ListaProductosComponent},
  {path:"gestioncontactos",component:GestionContactoComponent},
  {path:"editarcontacto/:id",component:GestionContactoComponent},
  {path:"listacontactos",component:ListaContactosComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
