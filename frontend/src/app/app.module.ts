import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MenuComponent } from './components/menu/menu.component';
import { ComponentsModule } from './components/components.module';

@NgModule({
  declarations: [
    AppComponent, 
    MenuComponent],
  imports: [
    BrowserModule,
    IonicModule.forRoot(), 
    AppRoutingModule,
    HttpClientModule,
    FormsModule, 
    ReactiveFormsModule, 
    ComponentsModule],
  providers: [{ provide: RouteReuseStrategy,
                useClass: IonicRouteStrategy}
              ],
  exports: [MenuComponent],
  bootstrap: [AppComponent],
})
export class AppModule { }
