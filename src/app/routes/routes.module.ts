import { NgModule } from '@angular/core';

import { SharedModule } from '@shared';
import { RouteRoutingModule } from './routes-routing.module';
// dashboard pages
import { DashboardComponent } from './dashboard/dashboard.component';
// passport pages
import { UserLoginComponent } from './passport/login/login.component';
import { UserRegisterComponent } from './passport/register/register.component';
import { UserRegisterResultComponent } from './passport/register-result/register-result.component';
// single pages
import { CallbackComponent } from './callback/callback.component';
import { UserLockComponent } from './passport/lock/lock.component';
import {WorkflowModule} from "./modules/workflow/workflow.module";
import {FilebagModule} from "./modules/workflow/filebag/filebag.module";

import {SudoModule} from "./modules/sudo/sudo.module";


const COMPONENTS = [
  DashboardComponent,
  // passport pages
  UserLoginComponent,
  UserRegisterComponent,
  UserRegisterResultComponent,
  // single pages
  CallbackComponent,
  UserLockComponent,
];
const COMPONENTS_NOROUNT = [];

@NgModule({
  imports: [ SharedModule,WorkflowModule,SudoModule,FilebagModule, RouteRoutingModule ],
  declarations: [
    ...COMPONENTS,
    ...COMPONENTS_NOROUNT,

  ],
  entryComponents: COMPONENTS_NOROUNT
})
export class RoutesModule {}
