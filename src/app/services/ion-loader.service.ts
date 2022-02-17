import { Injectable } from '@angular/core';
import { LoadingController } from '@ionic/angular';


@Injectable({
  providedIn: 'root'
})
export class IonLoaderService {

  constructor(
    public loadingController: LoadingController
  ) { }

  runloader(){
    this.loadingController.create({
      message: 'Loading...'
    }).then((response)=>{
      response.present();
    });
  }

  dismissLoader(){
    this.loadingController.dismiss();
  }
}
