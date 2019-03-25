import { Component, OnInit } from '@angular/core';
import {PubulictestService} from '../../../../services/pubulictest.service' ;
@Component({
  selector: 'app-seting2',
  templateUrl: './seting2.component.html',
  styleUrls: ['./seting2.component.css']
})
export class Seting2Component implements OnInit {
      i:number=0;
  constructor( public service:PubulictestService) {
    setInterval( ()=>{

      this.service.StatusMission(this.i++)
    } ,1000 );{


    }





  }



  ngOnInit() {
  }

}
