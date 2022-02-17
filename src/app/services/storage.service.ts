import { Injectable } from '@angular/core';
import { Storage } from '@capacitor/storage';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

  async store(storageKey: string, value: any){
    const encryptedValue = btoa(escape(JSON.stringify(value)));
    await Storage.set({
        key: storageKey,
        value: encryptedValue
    });
  }

  async get(storageKey: string) {
    const ret = await Storage.get({ key: storageKey });
    return JSON.parse(unescape(atob(ret.value)));
  }
}
