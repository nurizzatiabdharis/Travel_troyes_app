import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InteractivePageRoutingModule } from './interactive-routing.module';

import { InteractivePage } from './interactive.page';

// import all components
import { MainComponent } from './main/main.component';
import { DateComponent } from './date/date.component';
import { QuestionImgComponent } from './question-img/question-img.component';
import { QuestionTextComponent } from './question-text/question-text.component';
import { NavButtonComponent } from './nav-button/nav-button.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InteractivePageRoutingModule
  ],
  declarations: [
    InteractivePage,
    MainComponent,
    DateComponent,
    QuestionImgComponent,
    QuestionTextComponent,
    NavButtonComponent
  ]
})
export class InteractivePageModule {}
