import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WorkflowFilebagComponent } from '../filebag.component';

const routes: Routes = [


  { path: 'filebag', component: WorkflowFilebagComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WorkflowRoutingModule { }
