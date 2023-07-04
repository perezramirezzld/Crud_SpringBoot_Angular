import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'crud_Spring_Angular';

  constructor(private router:Router){}
    List(){
      this.router.navigate(["list"]);
   }
   Add(){
    this.router.navigate(["add"]);
  }
    Edit(){
      this.router.navigate(["Edit"]);
    }
}
