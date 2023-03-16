import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AccessoriesPageRoutingModule } from './accessories-routing.module';

import { AccessoriesPage } from './accessories.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AccessoriesPageRoutingModule,
    ComponentsModule
  ],
  declarations: [AccessoriesPage]
})
export class AccessoriesPageModule {}
