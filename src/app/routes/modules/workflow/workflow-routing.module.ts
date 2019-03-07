import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {BizdatumComponent} from './filebag/bizdatum/bizdatum.component'
import {ErrorComponent} from "./filebag/error/error.component";
import {FileBagTransferComponent} from "./filebag/file-bag-transfer/file-bag-transfer.component";
import {FilebagfunComponent} from "./filebag/filebagfun/filebagfun.component";
import {UploadComponent} from "./filebag/upload/upload.component";
import {SupendtableComponent} from "./filebag/supendtable/supendtable.component";
import {SendbacktableComponent} from "./filebag/sendbacktable/sendbacktable.component";
import {FilebagtreeComponent} from "./filebag/filebagtree/filebagtree.component";
import {FilebagsHeadsComponent} from "./filebag/filebags-heads/filebags-heads.component";
import {FileopinionComponent} from "./filebag/fileopinion/fileopinion.component";
import {MessagesComponent} from "./filebag/messages/messages.component";
import {FilebagparatransferComponent} from "./filebag/filebagparatransfer/filebagparatransfer.component";


const routes: Routes = [
  { path: 'bizdatum', component: BizdatumComponent, data: { title: '1' }  },
  { path: 'error', component: ErrorComponent, data: { title: '1' }  },
  { path: 'file-bag-transfer', component: FileBagTransferComponent, data: { title: '1' }  },
  { path: 'filebagfun', component: FilebagfunComponent, data: { title: '1' }  },
  { path: 'filebagparatransfer', component: FilebagparatransferComponent, data: { title: '1' }  },
  { path: 'filebagtree', component: FilebagtreeComponent, data: { title: '1' }  },
  { path: 'fileopinion', component: FileopinionComponent, data: { title: '1' }  },
  { path: 'filebags-heads', component: FilebagsHeadsComponent, data: { title: '1' }  },
  { path: 'messages', component: MessagesComponent, data: { title: '1' }  },
  { path: 'sendbacktable', component: SendbacktableComponent, data: { title: '1' }  },
  { path: 'supendtable', component: SupendtableComponent, data: { title: '1' }  },
  { path: 'upload', component: UploadComponent, data: { title: '1' }  },
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class WorkflowRoutingModule { }
