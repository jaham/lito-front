import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PolizasPage } from './polizas.page';
import { ExploreContainerComponentModule } from '../../components/explore-container/explore-container.module';

import { PolizasPageRoutingModule } from './polizas-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    PolizasPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [PolizasPage]
})
export class PolizasPageModule { }
