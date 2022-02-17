import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiserviceService } from '../services/apiservice.service';
import { AuthService } from '../services/auth.service';
import { IonLoaderService } from '../services/ion-loader.service';
import { StorageService } from '../services/storage.service';

@Component({
  selector: 'app-guru',
  templateUrl: './guru.page.html',
  styleUrls: ['./guru.page.scss'],
})
export class GuruPage implements OnInit {
  subjectList;
  namaGuru;
  sekolah;
  lencana;
  constructor(
    public apiService: ApiserviceService,
    public authService: AuthService,
    public storageService: StorageService,
    public router: Router,
    public ionLoaderService: IonLoaderService
  ) { }

  ngOnInit() {
    this.loadSubject();
    this.loadMaklumat();
  }

  loadSubject() {
    this.ionLoaderService.runloader();
    const jsonData = {
      action: 'getSenaraiSubjek'
    };

    this.storageService.get('token').then((tkn: string) => {
      this.authService.guruApi(jsonData, tkn).subscribe((res: any) => {
        this.subjectList = res.subjects;
        this.ionLoaderService.dismissLoader();
      });
    });
  }

  loadMaklumat() {
    this.storageService.get('namaGuru').then((namaGuru: string) => {
      this.namaGuru = namaGuru;
    });

    this.storageService.get('sekolah').then((sekolah: string) => {
      this.sekolah = sekolah;
    });

    this.storageService.get('lencana').then((lencana: string) => {
      this.lencana = lencana;
    });
  }

  hadir() {
    this.router.navigate(['scanguru']);
  }

  tidakhadir() {
    this.router.navigate(['tidakhadir']);
  }

}
