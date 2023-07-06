import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Person } from 'src/app/Model/Person';
import { ServiceService } from 'src/app/Service/service.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit{

  person: Person = new Person();
  constructor(private router:Router, private service:ServiceService) { 
    
  }
    
  ngOnInit() {
    this.Update();
  }

  Update(){
    let id=localStorage.getItem("id");
    this.service.getPersonId(+id!)
    .subscribe(data=>{
      this.person=data;
    })
  }
  Save(){
    this.service.UpdPerson(this.person)
    .subscribe(data=>{
      this.person=data;
      alert("Se actualizo con exito a " + this.person.name);
      this.router.navigate(["list"]);
    })
  }

}
