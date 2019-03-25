import { Component,Injectable, OnInit } from '@angular/core';
import { Subscription} from "rxjs";
import {PubulictestService} from '../../../../services/pubulictest.service' ;
@Component({
  selector: 'app-seting3',
  templateUrl: './seting3.component.html',
  styleUrls: ['./seting3.component.css']
})
export class Seting3Component implements OnInit {

   i:number=0;
   subscription:Subscription;


  constructor(private Service:PubulictestService) {
    this.subscription = Service.Status$.subscribe(message =>{
       this.i=message;
    });
  }

  ngOnDestroy(){
    this.subscription.unsubscribe()
}

  ngOnInit() {
  }

}
