import { Component, OnInit } from '@angular/core';
import { ProfileService } from 'src/app/pages/profile/profile.service';

@Component({
  selector: 'app-reset-pass',
  templateUrl: './reset-pass.component.html',
  styleUrls: ['./reset-pass.component.css']
})
export class ResetPassComponent implements OnInit {

  constructor( public profileService: ProfileService ) { }

  ngOnInit() {
  }

  showLogin() {

    this.profileService.showLogin();

  }

}
