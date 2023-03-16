import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdministratorPageRoutingModule } from './administrator-routing.module';

import { AdministratorPage } from './administrator.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdministratorPageRoutingModule,
    ComponentsModule
  ],
  declarations: [AdministratorPage]
})
export class AdministratorPageModule {}
