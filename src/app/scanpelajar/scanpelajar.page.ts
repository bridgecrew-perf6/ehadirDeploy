import { AuthService } from './../services/auth.service';
import { StorageService } from './../services/storage.service';
import { BarcodeScanner } from '@capacitor-community/barcode-scanner';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-scanpelajar',
  templateUrl: './scanpelajar.page.html',
  styleUrls: ['./scanpelajar.page.scss'],
})
export class ScanpelajarPage implements OnInit {
  kelasId: any;
  pelajarId: any;
  barCode: any;
  kelasNama: any;
  guruNama: any;
  guruId: any;
  dateToday: any = new Date();
  scanActive: boolean = false;

  constructor(
    private actRoute: ActivatedRoute,
    private storageService: StorageService,
    private authService: AuthService
  ) {
      this.kelasId = this.actRoute.snapshot.params.kelas_id;
      this.kelasNama = this.actRoute.snapshot.params.kelas_nama;
      this.guruNama = this.actRoute.snapshot.params.guru_nama;
      this.guruId = this.actRoute.snapshot.params.guru_id;
   }

  ngOnInit() {
  }

  async checkPermission() {
    return new Promise(async (resolve, reject) => {
      const status = await BarcodeScanner.checkPermission({ force: true });
      if (status.granted) {
        resolve(true);
      } else if (status.denied) {
        BarcodeScanner.openAppSettings();
        resolve(false);
      }
    });
  }

  async scan(){
    const allowed = await this.checkPermission();
    if (allowed) {
      this.scanActive = true;
      BarcodeScanner.hideBackground();

      const result = await BarcodeScanner.startScan();
      this.barCode = null;

      if (result.hasContent) {
        this.scanActive = false;
        this.barCode = result.content;

        const jsonData = {
          action: 'addHadirPelajar',
          kelas_id: this.kelasId,
          pelajar_id: this.barCode,
          guru_id: this.guruId
        };

        this.storageService.get('token').then((tkn: string) => {
          this.authService.pelajarApi(jsonData, tkn).subscribe((res: any) => {

            if (res.available === 0) {
              alert('Anda tidak berada di dalam kelas yang betul.');

            }else if(res.available === 1) {
              alert('Kehadiran telah direkod.');

            }else{
              if (res.inserted === 'Berjaya') {
                alert('Kehadiran telah direkod.');
              }
            }
          });
        });
      }else{
        alert('Kod QR tidak dapat dibaca');
      }
    }
  }

  stopScanner() {
    BarcodeScanner.stopScan();
    this.scanActive = false;
  }

  ionViewWillLeave() {
    BarcodeScanner.stopScan();
    this.scanActive = false;
  }
}
