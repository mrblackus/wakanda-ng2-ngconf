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
  public newConference: string;
  
  constructor(private _wakandaService: WakandaService) {
    this.conferences = [];
    this.currentConf = null;
    this.newConference = null;
  }
  
  public clickOnConf(c) {
    this.currentConf = c;
  }
  
  public addConference() {
    if (this.newConference) {
      this._wakandaService.catalog.then(c => {
        let conference = c['Conference'].create({name: this.newConference});
        conference.save().then(() => {
          this.newConference = null;
          this.loadConferences();
        });
      });
    }
  }
  
  private loadConferences() {
    this._wakandaService.catalog.then(c => {
      c['Conference'].query({select: 'people'}).then(collection => {
          this.conferences = collection.entities;
      });
    });
  }
  
  ngOnInit() {
    this.loadConferences();
  }
}
