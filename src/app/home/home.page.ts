import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { StorageService } from '../services/storage.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(
    public storageService: StorageService,
    public navCtrl: NavController
  ) {}

  ngOnInit() {
    this.checkToken();
   }

   checkToken() {
     this.storageService.get('token').then((tkn: string) => {
       if(tkn) {
         this.navCtrl.navigateRoot('utama');
       } else {
         this.navCtrl.navigateRoot('login');
       }
     }).catch((err) => {
       this.navCtrl.navigateRoot('login');
     });
   }

}
