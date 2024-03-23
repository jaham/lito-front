import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ExploreContainerComponentModule } from '../../components/explore-container/explore-container.module';

import { PolizasCardComponent } from '../../components/polizas-card/polizas-card.component';
import { InicioPageRoutingModule } from './inicio-routing.module';
import { InicioPage } from './inicio.page';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    InicioPageRoutingModule
  ],
  declarations: [
    InicioPage,
    PolizasCardComponent
  ]
})
export class InicioPageModule { }
