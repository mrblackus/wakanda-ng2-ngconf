import {Component, OnInit} from 'angular2/core';
import {WakandaService} from '../../services/wakanda';

@Component({
  selector: 'conference-list',
  styles: [require('./conference-list.scss')],
  template: require('./conference-list.html')
})
export class ConferenceList implements OnInit {
  
  public conferences: any[];
  
  constructor(private _wakandaService: WakandaService) {
    
  }
  
  ngOnInit() {
    console.log('on init');
    console.log(this._wakandaService);
    
    // this._wakandaService.catalog.then(c => {
    //   console.log(c);
      
      // c.Conference.query().then(collection => {
      //     this.conferences = collection.entities;
      //     console.log(this.conferences);
          
      // });
    // });
  }
}