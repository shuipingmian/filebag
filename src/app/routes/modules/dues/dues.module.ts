import { NgModule } from '@angular/core';
import { SharedModule } from '@shared';
import { DuesRoutingModule } from './dues-routing.module';
import { DuesTest1Component } from './dues/test1/test1.component';
import { DuesTest2Component } from './dues/test2/test2.component';
import { Test3Component } from './dues/test3/test3.component';

const COMPONENTS = [
  DuesTest1Component,
  DuesTest2Component];
const COMPONENTS_NOROUNT = [];

@NgModule({
  imports: [
    SharedModule,
    DuesRoutingModule
  ],
  declarations: [
    ...COMPONENTS,
    ...COMPONENTS_NOROUNT,
    Test3Component
  ],
  entryComponents: COMPONENTS_NOROUNT
})
export class DuesModule { }
