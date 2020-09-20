import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styles: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  mydata='hello'
  iplTeams=["chennai","mumbai","kolkata","hyderabaad"]
  flag:boolean=true;
  constructor() { }

  ngOnInit() {
  }
  search(data) {
   alert(data)
  }
  toggle()
  {
     this.flag=false;
  }
}
