import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-filebagtab',
  templateUrl: './filebagtab.component.html',
  styleUrls: ['./filebagtab.component.css']
})
export class FilebagtabComponent implements OnInit {
  time = new Date();
  constructor() { }

  ngOnInit() {
  }

}
