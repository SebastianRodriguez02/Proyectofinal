import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdmiUsersComponent } from './components/admi/admi-users/admi-users.component';
import { GestionContactoComponent } from './components/admi/gestion-contacto/gestion-contacto.component';
import { GestionProductosComponent } from './components/admi/gestion-productos/gestion-productos.component';
import { GestionUsuariosComponent } from './components/admi/gestion-usuarios/gestion-usuarios.component';
import { ListaContactosComponent } from './components/admi/lista-contactos/lista-contactos.component';
import { ListaProductosComponent } from './components/admi/lista-productos/lista-productos.component';
import { ListaUsuariosComponent } from './components/admi/lista-usuarios/lista-usuarios.component';
import { DetalleProductoComponent } from './components/detalle-producto/detalle-producto.component';
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
  {path:"listausuarios",component:ListaUsuariosComponent},
  {path:"gestionusuarios",component:GestionUsuariosComponent},
  {path:"editarusuario/:id",component:GestionUsuariosComponent},
  {path:"DetallesProducto", component:DetalleProductoComponent},



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
