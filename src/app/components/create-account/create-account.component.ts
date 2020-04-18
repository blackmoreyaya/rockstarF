import { Component, OnInit } from '@angular/core';
import { ProfileService } from 'src/app/pages/profile/profile.service';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.css']
})
export class CreateAccountComponent implements OnInit {

  constructor( public profileService: ProfileService ) { }

  ngOnInit() {
  }

  showLogin() {

    this.profileService.showLogin();

  }

}
