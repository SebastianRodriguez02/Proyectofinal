import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GatosComponent } from './components/gatos/gatos.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { PerrosComponent } from './components/perros/perros.component';

const routes: Routes = [
  {path: '', component:InicioComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
