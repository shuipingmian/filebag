import { NgModule } from '@angular/core';
import { SharedModule } from '@shared';
import { WorkflowRoutingModule } from './filebag/file-bag-transfer/workflow-routing.module';

import { WorkflowFilebagComponent } from './filebag/filebag.component';
import { FilebagsHeadsComponent } from './filebag/filebags-heads/filebags-heads.component';
import { BizdatumComponent } from './filebag/bizdatum/bizdatum.component';
import { ErrorComponent } from './filebag/error/error.component';
import { FileBagTransferComponent } from './filebag/file-bag-transfer/file-bag-transfer.component';
import { FilebagtreeComponent } from './filebag/filebagtree/filebagtree.component';
import { FilebagfunComponent } from './filebag/filebagfun/filebagfun.component';
import { FilebagparatransferComponent } from './filebag/filebagparatransfer/filebagparatransfer.component';
import { FileopinionComponent } from './filebag/fileopinion/fileopinion.component';
import { MessagesComponent } from './filebag/messages/messages.component';
import { SendbacktableComponent } from './filebag/sendbacktable/sendbacktable.component';
import { SupendtableComponent } from './filebag/supendtable/supendtable.component';
import { UploadComponent } from './filebag/upload/upload.component';

const COMPONENTS = [
  WorkflowFilebagComponent,
  WorkflowFilebagComponent];
const COMPONENTS_NOROUNT = [];

@NgModule({
  imports: [
    SharedModule,
    WorkflowRoutingModule
  ],
  declarations: [
    ...COMPONENTS,
    ...COMPONENTS_NOROUNT,
    FilebagsHeadsComponent,
    BizdatumComponent,
    ErrorComponent,
    FileBagTransferComponent,
    FilebagtreeComponent,
    FilebagfunComponent,
    FilebagparatransferComponent,
    FileopinionComponent,
    MessagesComponent,
    SendbacktableComponent,
    SupendtableComponent,
    UploadComponent
  ],
  entryComponents: COMPONENTS_NOROUNT
})
export class WorkflowModule { }
