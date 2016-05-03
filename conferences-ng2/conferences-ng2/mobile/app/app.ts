import {App, Platform} from 'ionic-angular';
import {StatusBar} from 'ionic-native';
import {Conferences} from './pages/conferences/conferences';
import {WakandaService} from './wakanda-service';

@App({
  template: '<ion-nav [root]="rootPage"></ion-nav>',
  providers: [WakandaService],
  config: {} // http://ionicframework.com/docs/v2/api/config/Config/
})
export class MyApp {
  rootPage: any = Conferences;

  constructor(platform: Platform) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
    });
  }
}
