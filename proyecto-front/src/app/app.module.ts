import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CarouselModule } from 'ngx-owl-carousel-o';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { FooterComponent } from './components/footer/footer.component';
import { PerrosComponent } from './components/perros/perros.component';
import { GatosComponent } from './components/gatos/gatos.component';
import { AdmiUsersComponent} from './components/admi/admi-users/admi-users.component';
import { GestionProductosComponent } from './components/admi/gestion-productos/gestion-productos.component';
import { ListaProductosComponent } from './components/admi/lista-productos/lista-productos.component';
import { GestionContactoComponent } from './components/admi/gestion-contacto/gestion-contacto.component';
import { ListaContactosComponent } from './components/admi/lista-contactos/lista-contactos.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    InicioComponent,
    FooterComponent,
    PerrosComponent,
    GatosComponent,
    AdmiUsersComponent,
    GestionProductosComponent,
    ListaProductosComponent,
    GestionContactoComponent,
    ListaContactosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    CarouselModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
