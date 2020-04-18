import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  public login = '';
  public account = 'oculto';
  public reset = 'oculto';

  constructor() { }

  showLogin() {
    this.login = '';
    this.account = 'oculto';
    this.reset = 'oculto';
  }

  showCreateAccount() {
    this.login = 'oculto';
    this.account = '';
    this.reset = 'oculto';
  }

  showResetPass() {
    this.login = 'oculto';
    this.account = 'oculto';
    this.reset = '';
  }

}
