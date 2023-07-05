import { NgModule } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AboutPageRoutingModule } from './about-routing.module';

import { AboutPage } from './about.page';

import { NavComponent } from '../nav/nav.component';
import { FooterComponent } from '../footer/footer.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        AboutPageRoutingModule,
        NavComponent,
        FooterComponent
    ],
    declarations: [AboutPage]
})
export class AboutPageModule {
}
