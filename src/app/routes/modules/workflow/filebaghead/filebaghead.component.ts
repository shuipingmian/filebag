import { Component, OnInit } from '@angular/core';
import {_HttpClient, SettingsService} from '@delon/theme';
import {ActivatedRoute, Router} from '@angular/router';
import {NzMessageService, NzModalService} from 'ng-zorro-antd';
import {DA_SERVICE_TOKEN, ITokenService} from '@delon/auth';
import {NzFormatEmitEvent} from 'ng-zorro-antd/tree';
@Component({
  selector: 'app-filebaghead',
  templateUrl: './filebaghead.component.html',
  styleUrls: ['./filebaghead.component.css']
})
export class FilebagheadComponent implements OnInit {

  constructor(
    private http: _HttpClient,
    private router: Router
  ) { }

  ngOnInit() {
  }
  nodes = [{
    title: 'parent 1',
    key: '100',
    expanded: true,
    children: [{
      title: 'parent 1-0',
      key: '1001',
      expanded: true,
      children: [
        {title: 'leaf1', key: '10010', isLeaf: true, url: '/filebag/test1'},
        {title: 'leaf2', key: '10011', isLeaf: true, url: '/filebag/test2'},
        {title: 'leaf3', key: '10012', isLeaf: true, url: '/filebag/test3'}
      ]
    }, {
      title: 'parent 1-1',
      key: '1002',
      children: [
        {title: 'leaf4', key: '10020', isLeaf: true, url: '/filebag/test4'}
      ]
    }, {
      title: 'parent 1-2',
      key: '1003',
      children: [
        {title: 'leaf5', key: '10030', isLeaf: true, url: '/filebag/test5'},
        {title: 'leaf6', key: '10031', isLeaf: true, url: '/filebag/test6'}
      ]
    }]
  }];

  nzEvent(event: NzFormatEmitEvent): void {
    this.router.navigateByUrl(event.node.origin.url);
    console.log(event.node);
  }
}
