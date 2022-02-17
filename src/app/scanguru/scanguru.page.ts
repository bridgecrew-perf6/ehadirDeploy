import { AuthService } from './../services/auth.service';
import { StorageService } from './../services/storage.service';
// import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
import { BarcodeScanner } from '@capacitor-community/barcode-scanner';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-scanguru',
  templateUrl: './scanguru.page.html',
  styleUrls: ['./scanguru.page.scss'],
})
export class ScanguruPage implements OnInit {
  kelasId: any;
  gsId: any;
  barCode: any;
  kelasNama: any;
  subjekNama: any;
  statusRPH: boolean;
  scanActive: boolean = false;
  dateToday: any = new Date();

  constructor(
    private actRoute: ActivatedRoute,
    // private barcodeScanner: BarcodeScanner,
    private storageService: StorageService,
    private authService: AuthService
  ) {
      this.kelasId = this.actRoute.snapshot.params.kelas_id;
      this.gsId = this.actRoute.snapshot.params.gs_id;
      this.kelasNama = this.actRoute.snapshot.params.kelas_nama;
      this.subjekNama = this.actRoute.snapshot.params.subjek_nama;
   }

  ngOnInit() {
    this.statusRPH = false;
    this.semakRph();
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
        }
      });
    });
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

  async scan() {
    const allowed = await this.checkPermission();
    if (allowed) {
      this.scanActive = true;
      BarcodeScanner.hideBackground();

      const result = await BarcodeScanner.startScan();
      this.barCode = null;
      if (result.hasContent) {
        this.scanActive = false;
        this.barCode = result.content;

        if(Number(result.content) === Number(this.kelasId)) {
          const jsonData = {
            action: 'updHadirGuru',
            gs_id: this.gsId
          };

          this.storageService.get('token').then((tkn: string) => {
            this.authService.guruApi(jsonData, tkn).subscribe((res: any) => {
              if (res.updated === 'Berjaya') {
                alert('Kehadiran Telah Direkod.');
              }
            });
          });
        } else {
          alert('Anda tidak berada di dalam kelas yang betul.');
        }
      }else {
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
