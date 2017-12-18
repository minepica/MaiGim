import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { AngularFireAuth } from 'angularfire2/auth';
import { LoginComponent } from './components/login/login.component';
import { environment } from '../environments/environment';
import { AngularFireModule } from 'angularfire2';
import { AdminPanelModuleModule } from './components/admin-panel/admin-panel-module/admin-panel-module.module';
import { AngularFireDatabase } from 'angularfire2/database';
import { AdduserComponent } from './components/adduser/adduser.component';
import { ModuserComponent } from './components/moduser/moduser.component';
import { AppRoutingModule } from './app-routing.module';
import { UserComponent } from './components/user/user.component';

import { AuthenticationService } from './services/authentication.service';





@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    AdduserComponent,
    ModuserComponent,
    UserComponent,
  ],
  imports: [
    AngularFireModule.initializeApp(environment.firebase),
    BrowserModule,
    AdminPanelModuleModule,
    AppRoutingModule,
  ],
  providers: [AngularFireAuth, AngularFireDatabase],
  bootstrap: [AppComponent]
})
export class AppModule { }
