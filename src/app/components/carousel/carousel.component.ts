import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {

  images = ['http://localhost:4200/assets/img/slide1.jpg', 'http://localhost:4200/assets/img/slide2.jpeg', 'http://localhost:4200/assets/img/slide3.jpeg'];

  constructor() { }

  ngOnInit() {
  }

}
