import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  private splashScreen: SplashScreen;
  private platform: Platform;

  constructor(
    public afAuth: AngularFireAuth,
    private router: Router,
    private statusBar: StatusBar,
     ) { }

  initializeApp() {
    this.platform.ready().then(() => {
      this.afAuth.user.subscribe(user => {
        if (user) {
          this.router.navigate(['/home']);
        } else {
          this.router.navigate(['/login']);
        }
      }, err => {
        this.router.navigate(['/login']);
      }, () => {
        this.splashScreen.hide();
      });
      this.statusBar.styleDefault();
    });
  }
}
