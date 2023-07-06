import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/Service/service.service';
import { Router } from '@angular/router';
import { Person } from 'src/app/Model/Person';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit{
  person: Person = new Person();

  constructor(private router:Router, private service:ServiceService) { }

  ngOnInit() {
    this.person = new Person();
    console.log(this.person);
  }

  Save() {
    this.service.addPerson(this.person).subscribe(data => {
      alert("Se ha agregado con éxito a " + this.person.name + ".");
      this.router.navigate(["list"]);
    });
  }
  
}
