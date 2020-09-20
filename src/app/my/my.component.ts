import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my',
  templateUrl: './my.component.html',
  styleUrls: ['./my.component.css']
})
export class MyComponent implements OnInit {
  name:string="laxmi kant"
  constructor() { }

  ngOnInit() {
  }
  sendData(_name,_pass) {
   alert(_name)
   alert(_pass)
  }
}
