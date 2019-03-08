import { NgModule } from '@angular/core';
import { SharedModule } from '@shared';
import {FilebagComponent} from './filebag/filebag.component';
import { AllprojectProvinceComponent } from './allproject-province/allproject-province.component';
import {WorkflowRoutingModule} from "./workflow-routing.module";
import { CesiComponent } from './cesi/cesi.component';


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
    CesiComponent,
  ],
  entryComponents: COMPONENTS_NOROUNT
})
export class WorkflowModule { }
