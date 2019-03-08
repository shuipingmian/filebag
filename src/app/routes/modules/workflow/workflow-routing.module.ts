import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AllprojectProvinceComponent} from "./allproject-province/allproject-province.component";
import {FilebagComponent} from "./filebag/filebag.component";
import {CesiComponent} from  "./cesi/cesi.component";

const routes: Routes = [


  {path: 'all', component: AllprojectProvinceComponent},
  {path:'filebag', component:FilebagComponent},
  {path:'cesi',component:CesiComponent},
]



@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class WorkflowRoutingModule { }
