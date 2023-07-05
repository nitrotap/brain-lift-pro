import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SignupPageRoutingModule } from './signup-routing.module';

import { SignupPage } from './signup.page';

import { NavComponent } from '../nav/nav.component';
import { FooterComponent } from '../footer/footer.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SignupPageRoutingModule,
    NavComponent,
    FooterComponent
  ],
  declarations: [SignupPage]
})
export class SignupPageModule { }
