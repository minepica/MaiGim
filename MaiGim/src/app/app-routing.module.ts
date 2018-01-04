import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AdminPanelComponent } from './components/admin-panel/admin-panel.component';
import { AdduserComponent } from './components/adduser/adduser.component';
import { ModuserComponent } from './components/moduser/moduser.component';
import { LoginComponent } from './components/login/login.component';
import { UserComponent } from './components/user/user.component';
import { ModSchedaComponent } from './components/admin-panel/mod-scheda/mod-scheda.component';
import { AddEsercizioComponent } from './components/admin-panel/add-esercizio/add-esercizio.component';




const routes: Routes = [

  { path: 'mod/:id', component: ModuserComponent },
  { path: 'modScheda/:id', component: ModSchedaComponent },
  { path: 'adduser', component: AdduserComponent },
  { path: 'addEx', component: AddEsercizioComponent },
  { path: 'user', component: UserComponent },
  { path: '', component: LoginComponent }

];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
