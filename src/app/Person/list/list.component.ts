import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/Service/service.service';
import { Router } from '@angular/router';
import { Person } from 'src/app/Model/Person';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})

export class ListComponent  implements OnInit{

  persons!: Person[];
  constructor(private service:ServiceService, private router:Router) { 
  

  } 
  ngOnInit() {
    this.service.getPersons()
    .subscribe(data=>{
      this.persons=data;
    })
  }
  Edit(person:Person):void{
    localStorage.setItem("id",person.id.toString());
    this.router.navigate(["edit"]);
  }

  Delete(peson:Person){
    this.service.deletePerson(peson)
    .subscribe(data=>{
      this.persons=this.persons.filter(p => p !== peson);
      alert("Se elimino con exito a " + peson.name);
    })
  }
}
