import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FuncionesComponent } from './funciones/funciones.component';
import { ProductosComponent } from './productos/productos.component';
import { BoletosComponent } from './boletos/boletos.component';
import { HttpClientModule } from '@angular/common/http';
import { ClientesModule } from './clientes/clientes.module';
import { AppRoutingModule } from './app-routing.module';




@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FuncionesComponent,
    ProductosComponent,
    BoletosComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ClientesModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {


 }
