import { Component, OnInit } from '@angular/core';
import { ProfileService } from './../../pages/profile/profile.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor( public profileService: ProfileService ) { }

  ngOnInit() {
  }

  showCreateAccount() {

    this.profileService.showCreateAccount();

  }


  showResetPass() {

    this.profileService.showResetPass();

  }

}
