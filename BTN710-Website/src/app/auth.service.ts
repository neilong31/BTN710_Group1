import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  loggedIn: Boolean;
  password: String;

  constructor() { 
    this.loggedIn = false;
    this.password = "$2a$10$YS3q.4eqJvDedbhu/3Aeg.icAN1IJEtWNuaLno7CsBVMmp5AyIDz2";
  }

}
