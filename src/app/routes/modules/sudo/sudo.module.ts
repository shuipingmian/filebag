import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@shared';
import { SudoRoutingModule } from './sudo-routing.module';
import { SetingComponent } from './seting/seting.component';
import { Seting2Component } from './seting2/seting2.component';
import { Seting3Component } from './seting3/seting3.component';
import { Seting4Component } from './seting4/seting4.component';


const COMPONENTS = [

  SetingComponent,
  Seting2Component,
];
const COMPONENTS_NOROUNT = [
];
@NgModule({

  imports: [
    SharedModule,
    CommonModule,
    SudoRoutingModule
  ],
  declarations: [
    ...COMPONENTS,
    ...COMPONENTS_NOROUNT,
    SetingComponent, Seting2Component, Seting3Component, Seting4Component,


  ],
  entryComponents: COMPONENTS_NOROUNT,

})
export class SudoModule { }
