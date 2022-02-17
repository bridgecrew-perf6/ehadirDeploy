import { NavController } from '@ionic/angular';
import { AuthService } from './../services/auth.service';
import { ApiserviceService } from './../services/apiservice.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { StorageService } from '../services/storage.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-tidakhadir',
  templateUrl: './tidakhadir.page.html',
  styleUrls: ['./tidakhadir.page.scss'],
})

export class TidakhadirPage implements OnInit {

  postData = {

    txtAlasan: '',
    txtCatat: ''
  };

  statusTxtBx = 0;
  titleTxtBx = '';
  statusDrpDwn = 0;
  statusReq = '';

  alasanList;
  cutiId;
  kelasId: any;
  gsId: any;
  kelasNama: any;
  subjekNama: any;
  statusRPH: boolean;
  dateToday: any = new Date();

  constructor(
    private actRoute: ActivatedRoute,
    public apiService: ApiserviceService,
    public authService: AuthService,
    public storageService: StorageService,
    public router: Router,
    public navCtrl: NavController
  ) {
      this.kelasId = this.actRoute.snapshot.params.kelas_id;
      this.gsId = this.actRoute.snapshot.params.gs_id;
      this.kelasNama = this.actRoute.snapshot.params.kelas_nama;
      this.subjekNama = this.actRoute.snapshot.params.subjek_nama;
   }

  ngOnInit() {
    this.loadAlasan();
    this.statusRPH = false;
    this.semakRph();
  }

  checkSelection(){
    switch (this.postData.txtAlasan) {
      case '2':
        this.titleTxtBx = 'No Sijil Sakit';
        this.statusTxtBx = 1;
        this.statusDrpDwn = 0;
        this.statusReq = 'required';
        break;
      case '7':
        this.titleTxtBx = 'Nama Aktiviti';
        this.statusTxtBx = 1;
        this.statusDrpDwn = 0;
        this.statusReq = 'required';
        break;
      case '10':
        this.titleTxtBx = 'Nama Urusan';
        this.statusTxtBx = 1;
        this.statusDrpDwn = 0;
        this.statusReq = 'required';
        break;
      case '11':
        this.titleTxtBx = 'Nama Program';
        this.statusTxtBx = 1;
        this.statusDrpDwn = 0;
        this.statusReq = 'required';
        break;
      case '14':
        this.titleTxtBx = 'Alasan Lain';
        this.statusTxtBx = 1;
        this.statusDrpDwn = 0;
        this.statusReq = 'required';
        break;
      case '6':
        this.statusTxtBx = 0;
        this.statusDrpDwn = 1;
        this.statusReq = 'required';
        break;
      default:
        this.statusTxtBx = 0;
        this.statusDrpDwn = 0;
        this.statusReq = '';
        this.postData.txtCatat = '';
        break;
    }
  }

  semakRph(){
    const jsonData = {
      action: 'semakStatusRph',
      // eslint-disable-next-line @typescript-eslint/naming-convention
      gs_id: this.gsId
    };

    this.storageService.get('token').then((tkn: string) => {
      this.authService.guruApi(jsonData, tkn).subscribe((res: any) => {
        if (res.available === 1) {
          this.statusRPH = true;
          this.postData.txtAlasan = res.cuti_id;
          this.postData.txtCatat = res.hadir_catat;
        }
      });
    });
  }

  loadAlasan() {
    const jsonData = {
      action: 'getSenaraiAlasan'
    };

    this.storageService.get('token').then((tkn: string) => {
      this.authService.guruApi(jsonData, tkn).subscribe((res: any) => {
        this.alasanList = res.alasan;
        this.loadGetAlasan();
      });
    });
  }

  loadGetAlasan() {
    const jsonData = {
      action: 'getAlasan',
      // eslint-disable-next-line @typescript-eslint/naming-convention
      gs_id: this.gsId
    };

    this.storageService.get('token').then((tkn: string) => {
      this.authService.guruApi(jsonData, tkn).subscribe((res: any) => {
        console.log(res);
        this.cutiId = res.alasan.cuti_id;
        this.postData.txtCatat = res.alasan.hadir_catat;
        this.postData.txtAlasan = res.alasan.cuti_id;
      });
    });
  }

  validateInputs(){
    const txtAlasan = this.postData.txtAlasan.trim();
    const txtCatat = this.postData.txtCatat.trim();

    switch (this.postData.txtAlasan) {
      case '2':
        return (this.postData.txtAlasan && this.postData.txtCatat && txtAlasan.length > 0 && txtCatat.length > 0);
        break;
      case '7':
        return (this.postData.txtAlasan && this.postData.txtCatat && txtAlasan.length > 0 && txtCatat.length > 0);
        break;
      case '10':
        return (this.postData.txtAlasan && this.postData.txtCatat && txtAlasan.length > 0 && txtCatat.length > 0);
        break;
      case '11':
        return (this.postData.txtAlasan && this.postData.txtCatat && txtAlasan.length > 0 && txtCatat.length > 0);
        break;
      case '14':
        return (this.postData.txtAlasan && this.postData.txtCatat && txtAlasan.length > 0 && txtCatat.length > 0);
        break;
      case '6':
        return (this.postData.txtAlasan && this.postData.txtCatat && txtAlasan.length > 0 && txtCatat.length > 0);
        break;
      default:
        return (this.postData.txtAlasan && txtAlasan.length > 0);
        break;
    }
  }

  simpan() {
    if (this.validateInputs()) {
      const jsonData = {
        action: 'updTidakHadirGuru',
        // eslint-disable-next-line @typescript-eslint/naming-convention
        gs_id: this.gsId,
	  	  // eslint-disable-next-line @typescript-eslint/naming-convention
	  	  cuti_id: this.postData.txtAlasan,
		    // eslint-disable-next-line @typescript-eslint/naming-convention
		    hadir_catat: this.postData.txtCatat
      };

      this.storageService.get('token').then((tkn: string) => {
        this.authService.guruApi(jsonData, tkn).subscribe((res: any) => {
          if (res.updated === 'Berjaya') {
            alert('Kehadiran Telah Disimpan.');
            this.navCtrl.navigateRoot('/guru');
          } else {
            alert('Sila Lengkapkan Maklumat Terlebih Dahulu.');
          }
        });
      });
    } else {
      console.log('error');
    }
  }
}
