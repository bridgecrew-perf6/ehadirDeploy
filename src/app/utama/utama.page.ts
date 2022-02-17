import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { IonRouterOutlet, NavController, Platform } from '@ionic/angular';
import { StorageService } from '../services/storage.service';
import { AuthService } from '../services/auth.service';
import { Plugins } from '@capacitor/core';

const { app } = Plugins;
@Component({
  selector: 'app-utama',
  templateUrl: './utama.page.html',
  styleUrls: ['./utama.page.scss'],
})
export class UtamaPage implements OnInit {

  constructor(
    public authService: AuthService,
    public router: Router,
    public storageService: StorageService,
    public navCtrl: NavController,
    public platform: Platform,
    public routerOutlet: IonRouterOutlet
  ) {
    this.platform.backButton.subscribeWithPriority(-1, () => {
      if(!this.routerOutlet.canGoBack){
        app.exitApp();
      }
    });
  }

  ngOnInit() {
  }

  scanGuru() {
    this.router.navigate(['guru']);
  }

  scanPelajar() {
    this.router.navigate(['pelajar']);
  }

  logout(){
    const jsonData = {
    };

    this.storageService.get('token').then((tkn: string) => {
      this.authService.logout(jsonData, tkn).subscribe((res: any) => {
        localStorage.clear();
        sessionStorage.clear();
        if (res.status === 'Berjaya') {
          this.navCtrl.navigateRoot('/login');
        }
      });
    });
  }
}
