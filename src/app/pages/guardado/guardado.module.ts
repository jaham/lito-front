import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { GuardadoPage } from './guardado.page';
import { ExploreContainerComponentModule } from '../../components/explore-container/explore-container.module';
import { GuardadoPageRoutingModule } from './guardado-routing.module';


@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    GuardadoPageRoutingModule
  ],
  declarations: [GuardadoPage]
})
export class GuardadoPageModule { }
