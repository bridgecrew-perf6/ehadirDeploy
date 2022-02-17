import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GuruPageRoutingModule } from './guru-routing.module';

import { GuruPage } from './guru.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GuruPageRoutingModule
  ],
  declarations: [GuruPage]
})
export class GuruPageModule {}
