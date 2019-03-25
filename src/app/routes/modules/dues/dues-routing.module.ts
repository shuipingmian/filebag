import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DuesTest1Component } from './dues/test1/test1.component';
import { DuesTest2Component } from './dues/test2/test2.component';
import { Test3Component } from './dues/test3/test3.component';
const routes: Routes = [

  { path: 'test1', component: DuesTest1Component },
  { path: 'test2', component: DuesTest2Component },
  { path: 'test3', component: Test3Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DuesRoutingModule { }
