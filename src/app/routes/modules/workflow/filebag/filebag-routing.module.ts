import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {IndexComponent} from "./index/index.component";
import {FilebagComponent} from "./filebag.component";

const routes: Routes = [

  {path: 'filebag', component:FilebagComponent  ,children : [
      { path: 'datums_submit', data: { title: '窗口资料收取' }, component: IndexComponent }
    ]


  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FilebagRoutingModule { }
