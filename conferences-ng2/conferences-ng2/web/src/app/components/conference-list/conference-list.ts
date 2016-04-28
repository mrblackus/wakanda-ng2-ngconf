import {Component, OnInit} from 'angular2/core';
import {WakandaService} from '../../services/wakanda';

@Component({
  selector: 'conference-list',
  styles: [require('./conference-list.scss')],
  template: require('./conference-list.html')
})
export class ConferenceList implements OnInit {
  
  public conferences: any[];
  public currentConf: any;
  
  constructor(private _wakandaService: WakandaService) {
    this.conferences = [];
    this.currentConf = null;
  }
  
  public clickOnConf(c) {
    this.currentConf = c;
  }
  
  ngOnInit() {
    this._wakandaService.catalog.then(c => {
      c['Conference'].query({select: 'people'}).then(collection => {
          this.conferences = collection.entities;
      });
    });
  }
}
