import {Page, NavParams} from 'ionic-angular';
import {ProfilePicturePipe} from '../../pipe/profilepicture-pipe';

@Page({
  templateUrl: 'build/pages/conference-detail/conference-detail.html',
  pipes: [ProfilePicturePipe]
})
export class ConferenceDetail {
  
  public conference: any;
  
  constructor(private _navParams: NavParams) {
    this.conference = this._navParams.get('conference');
  }
}