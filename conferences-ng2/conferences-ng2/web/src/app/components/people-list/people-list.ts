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
  
  constructor(private _wakandaService: WakandaService) {
    this.peopleList = [];
    this.currentPeople = null;
  }
  
  public clickOnPeople(p) {
    this.currentPeople = p;
  }
  
  ngOnInit() {
    this._wakandaService.catalog.then(c => {
      c['Person'].query({select: 'conferences'}).then(collection => {
        this.peopleList = collection.entities; 
      });
    });
  }
}