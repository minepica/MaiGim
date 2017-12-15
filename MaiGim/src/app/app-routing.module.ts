import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AdminPanelComponent } from './components/admin-panel/admin-panel.component';
import { AdduserComponent } from './components/adduser/adduser.component';
import { ModuserComponent } from './components/moduser/moduser.component';



const routes: Routes = [
  {path: 'adminpanel', loadChildren: './components/admin-panel/admin-panel-module/admin-panel-module#AdminPanelModuleModule' },
  { path: 'mod/:id', component: ModuserComponent },
  { path: 'adduser', component: AdduserComponent }

  // { path: 'classiche/:id', component: ClassichedetailComponent }


];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
