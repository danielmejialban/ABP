import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutMeComponent } from './Componentes/about-me/about-me.component';
import { HomeComponent } from './Componentes/home/home.component';
@NgModule({
  declarations: [
    AppComponent,
    AboutMeComponent,
    HomeComponent
  ],
  imports: [ /***Aquí podemos importar varios modulos*/
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
