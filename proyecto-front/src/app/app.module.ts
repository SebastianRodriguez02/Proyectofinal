import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { FooterComponent } from './components/footer/footer.component';
import { PerrosComponent } from './components/perros/perros.component';
import { GatosComponent } from './components/gatos/gatos.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    InicioComponent,
    FooterComponent,
    PerrosComponent,
    GatosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
