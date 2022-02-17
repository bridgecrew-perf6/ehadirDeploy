import { AuthService } from './../services/auth.service';
import { ApiserviceService } from './../services/apiservice.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { StorageService } from '../services/storage.service';
import { Router, ActivatedRoute } from '@angular/router';
import { IonLoaderService } from '../services/ion-loader.service';

@Component({
  selector: 'app-pelajar',
  templateUrl: './pelajar.page.html',
  styleUrls: ['./pelajar.page.scss'],
})
export class PelajarPage implements OnInit {
  classList;
  namaGuru;
  sekolah;
  lencana;
  constructor(
    private actRoute: ActivatedRoute,
    private storageService: StorageService,
    private authService: AuthService,
    public apiService: ApiserviceService,
    public router: Router,
    public ionLoaderService: IonLoaderService
  ) { }

  ngOnInit() {
    this.loadClass();
    this.loadMaklumat();
  }

  loadClass() {
    this.ionLoaderService.runloader();
    const jsonData = {
      action: 'getSenaraiKelas',
    };

    this.storageService.get('token').then((tkn: string) => {
      this.authService.pelajarApi(jsonData, tkn).subscribe((res: any) => {
        this.classList = res.kelas;
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

}
