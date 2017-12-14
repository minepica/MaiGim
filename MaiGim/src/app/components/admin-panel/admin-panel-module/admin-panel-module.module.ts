import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminPanelComponent } from '../admin-panel.component';


import {MatButtonModule,
  MatCheckboxModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatFormFieldModule,
  MatFormField,
  MatSelectModule,
  MatOptionModule,
  MatSnackBarModule
} from '@angular/material';

import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { AddEsercizioComponent } from '../add-esercizio/add-esercizio.component';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';


@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    MatCheckboxModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
    AngularFontAwesomeModule,
    BrowserAnimationsModule,
    MatSelectModule,
    MatOptionModule,
    MatSnackBarModule
  ],
  declarations: [
    AdminPanelComponent,
    AddEsercizioComponent
  ],
  exports : [
    AdminPanelComponent,
    MatButtonModule,
    MatCheckboxModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    AngularFontAwesomeModule,
    AddEsercizioComponent,
    BrowserAnimationsModule,
    MatSelectModule,
    MatOptionModule,
    MatSnackBarModule
  ]
})
export class AdminPanelModuleModule { }
