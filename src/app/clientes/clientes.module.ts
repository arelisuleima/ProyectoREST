import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VerfraseComponent } from "./componentes/verfrase/verfrase.component";


@NgModule({
  declarations: [VerfraseComponent],
  imports: [
    CommonModule
  ],
  exports: [VerfraseComponent]
})
export class ClientesModule { }
