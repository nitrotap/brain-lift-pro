import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MeasurePageRoutingModule } from './measure-routing.module';

import { MeasurePage } from './measure.page';

import { NavComponent } from '../nav/nav.component';
import { FooterComponent } from '../footer/footer.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MeasurePageRoutingModule,
    NavComponent,
    FooterComponent
  ],
  declarations: [MeasurePage]
})
export class MeasurePageModule { }
