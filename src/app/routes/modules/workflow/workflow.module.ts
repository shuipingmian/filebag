import { NgModule } from '@angular/core';
import { SharedModule } from '@shared';

import { AllprojectProvinceComponent } from './allproject-province/allproject-province.component';
import {WorkflowRoutingModule} from "./workflow-routing.module";

const COMPONENTS = [

  ];
const COMPONENTS_NOROUNT = [

];
@NgModule({
  imports: [
    SharedModule,
    WorkflowRoutingModule
  ],
  declarations: [
    ...COMPONENTS,
    ...COMPONENTS_NOROUNT,
    AllprojectProvinceComponent
  ],
  entryComponents: COMPONENTS_NOROUNT
})
export class WorkflowModule { }
