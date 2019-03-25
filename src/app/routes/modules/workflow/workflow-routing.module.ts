import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AllprojectProvinceComponent} from "./allproject-province/allproject-province.component";


const routes: Routes = [


  {path: 'all', component: AllprojectProvinceComponent},

]



@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class WorkflowRoutingModule { }
