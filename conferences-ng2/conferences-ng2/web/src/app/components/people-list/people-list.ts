import {Component, OnInit} from 'angular2/core';
import {WakandaService} from '../../services/wakanda';

@Component({
  selector: 'people-list',
  styles: [require('./people-list.scss')],
  template: require('./people-list.html')
})
export class PeopleList implements OnInit {
  
  public peopleList: any[];
  public currentPeople: any;
  public newPerson: string;

  
  constructor(private _wakandaService: WakandaService) {
    this.peopleList = [];
    this.currentPeople = null;
    this.newPerson = null;
  }
  
  public clickOnPeople(p) {
    this.currentPeople = p;
  }
  
    
  public addPeople() {
    if (this.newPerson) {
      this._wakandaService.catalog.then(c => {
        let person = c['Person'].create({
          name: this.newPerson
        });
        
        person.save().then(() => {
          this.newPerson = null;
          this.loadPersons();
        });
      });
    }
  }
  
  ngOnInit() {
    this.loadPersons();
  }
  
  loadPersons() {
    this._wakandaService.catalog.then(c => {
      c['Person'].query({select: 'conferences', orderBy: 'name'}).then(collection => {
        this.peopleList = collection.entities; 
      });
    });
  }
}