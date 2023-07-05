import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EducationPageRoutingModule } from './education-routing.module';

import { EducationPage } from './education.page';

import { NavComponent } from '../nav/nav.component';
import { FooterComponent } from '../footer/footer.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EducationPageRoutingModule,
    NavComponent,
    FooterComponent
  ],
  declarations: [EducationPage]
})
export class EducationPageModule { }
