import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Person } from '../Model/Person';
@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  //Variables

  constructor(private http: HttpClient) { }
  Url='http://localhost:8081/person';

  getPersons(){
    return this.http.get<Person[]>(this.Url);
  }
  addPerson(person:Person){
    return this.http.post<Person>(this.Url,person);
  }
  getPersonId(id:number){
    return this.http.get<Person>(this.Url+"/"+id);
  }
  UpdPerson(person:Person){
    return this.http.put<Person>(this.Url+"/"+person.id,person);
  }
  deletePerson(person:Person){
    return this.http.delete<Person>(this.Url+"/"+person.id);
  }
}
