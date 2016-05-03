import {Page, NavController} from 'ionic-angular';

import {WakandaService} from '../../wakanda-service';
import {ConferenceDetail} from '../conference-detail/conference-detail.ts';
@Page({
  templateUrl: 'build/pages/conferences/conferences.html'
})
export class Conferences {
  
  public conferences: any[];
  
  constructor(private _wakandaService: WakandaService,
    private _nav: NavController) {
  }
  
  onPageWillEnter() {
    this._wakandaService.catalog.then(c => {
      c['Conference'].query({select: 'people'}).then(collection => {
        this.conferences = collection.entities;
      });
    });
  }
  
  public clickOnConf(conference: any) {
    this._nav.push(ConferenceDetail, {conference});
  }
}