import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PagoPageRoutingModule } from './pago-routing.module';

import { PagoPage } from './pago.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PagoPageRoutingModule,
    ComponentsModule
  ],
  declarations: [PagoPage]
})
export class PagoPageModule {}
