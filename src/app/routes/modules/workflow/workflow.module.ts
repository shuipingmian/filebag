import { NgModule } from '@angular/core';
import { SharedModule } from '@shared';
import { AllprojectProvinceComponent } from './allproject-province/allproject-province.component';
import {WorkflowRoutingModule} from "./workflow-routing.module";
import { FilebagComponent } from './filebag/filebag.component';
import { FilebagfunComponent } from './filebagfun/filebagfun.component';
import { FilebagheadComponent } from './filebaghead/filebaghead.component';
import {FilebagtabComponent} from "./filebag/filebagtab/filebagtab.component";


const COMPONENTS = [

  ];
const COMPONENTS_NOROUNT = [

];
@NgModule({
  imports: [
    SharedModule,
    WorkflowRoutingModule,
  ],
  declarations: [
    ...COMPONENTS,
    ...COMPONENTS_NOROUNT,
    AllprojectProvinceComponent,
    FilebagComponent,
    FilebagfunComponent,
    FilebagheadComponent,
    FilebagtabComponent,

  ],
  entryComponents: COMPONENTS_NOROUNT
})
export class WorkflowModule { }
