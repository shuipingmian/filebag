import { Component, OnInit } from '@angular/core';
import {NavigationExtras, Router} from "@angular/router";
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'
@Component({
  selector: 'app-allproject-province',
  templateUrl: './allproject-province.component.html',
  styleUrls: ['./allproject-province.component.css']
})
export class AllprojectProvinceComponent implements OnInit {

  constructor(
    private router: Router
  ) { }
  queryCoondition='';



  ngOnInit() {
  }

  /**
   * 打开档案袋
   */
  data ={}
  openFilebag(){
    const navigationExtras: NavigationExtras = {
      queryParams: this.data
    };
    this.router.navigate(['/filebag'], navigationExtras);
  }

}
