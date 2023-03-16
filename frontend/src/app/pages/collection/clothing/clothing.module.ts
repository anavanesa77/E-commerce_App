import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ClothingPageRoutingModule } from './clothing-routing.module';

import { ClothingPage } from './clothing.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ClothingPageRoutingModule,
    ComponentsModule
  ],
  declarations: [ClothingPage]
})
export class ClothingPageModule {}
