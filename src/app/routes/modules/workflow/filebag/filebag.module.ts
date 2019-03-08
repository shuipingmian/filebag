import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FilebagRoutingModule } from './filebag-routing.module';
import { FilebagComponent } from './filebag.component';
import { IndexComponent } from './index/index.component';

@NgModule({
  declarations: [FilebagComponent,
                 IndexComponent


                             ],
  imports: [
    CommonModule,
    FilebagRoutingModule,
  ],

  entryComponents: [
    FilebagComponent,
    IndexComponent

  ],

})
export class FilebagModule { }
