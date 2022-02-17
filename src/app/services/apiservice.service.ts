import { StorageService } from './storage.service';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiserviceService {

  constructor(private http: HttpClient,
    public storageService: StorageService) { }

  post(serviceName: string, data: any) {
    const headers = new HttpHeaders();
    const options = { headers };
    const url = 'https://qrehadir.pahang.gov.my/api/kehadiran/' + serviceName;

    return this.http.post(url, JSON.stringify(data), options);
  }

  postWithToken(serviceName: string, data: any, tkn: string){
    let headers = new HttpHeaders();
    headers = headers.append('Authorization', tkn);
    const options = { headers };
    const url = 'https://qrehadir.pahang.gov.my/api/kehadiran/' + serviceName;

    return this.http.post(url, JSON.stringify(data), options);
  }
}
