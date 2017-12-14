import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminPanelComponent } from '../admin-panel.component';


import {MatButtonModule, MatCheckboxModule, MatGridListModule, MatIconModule} from '@angular/material';

import { AngularFontAwesomeModule } from 'angular-font-awesome';


@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    MatCheckboxModule,
    MatGridListModule,
    MatIconModule,
    AngularFontAwesomeModule
  ],
  declarations: [AdminPanelComponent],
  exports : [
    AdminPanelComponent,
    MatButtonModule,
    MatCheckboxModule,
    MatGridListModule,
    MatIconModule,
    AngularFontAwesomeModule
  ]
})
export class AdminPanelModuleModule { }
