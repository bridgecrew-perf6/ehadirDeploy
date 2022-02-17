import { ApiserviceService } from './apiservice.service';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private apiservice: ApiserviceService,
    private storageService: StorageService
  ) { }

  login(postData: any): Observable<any> {
    try {
      return this.apiservice.post('loginAPI.php', postData);
    } catch (error) {
      console.log(error);
    }
  }

  guruApi(jsonData: any, tkn: string): Observable<any> {
    return this.apiservice.postWithToken ('kehadiranGuruAPI.php', jsonData, tkn);
  }

  pelajarApi(jsonData: any, tkn: string): Observable<any> {
    return this.apiservice.postWithToken ('kehadiranPelajarAPI.php', jsonData, tkn);
  }

  logout(jsonData: any, tkn: string): Observable<any> {
    return this.apiservice.postWithToken ('logoutAPI.php', jsonData, tkn);
  }
}
