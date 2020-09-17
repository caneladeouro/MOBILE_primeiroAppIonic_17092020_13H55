import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SelectedPageRoutingModule } from './selected-routing.module';

import { SelectedPage } from './selected.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SelectedPageRoutingModule
  ],
  declarations: [SelectedPage]
})
export class SelectedPageModule {}
