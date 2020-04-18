import { Component, OnInit } from '@angular/core';
import { NgbDropdown } from '@ng-bootstrap/ng-bootstrap';
import { CartService } from './../../components/cart/cart.service';
import { Category } from './../../models/category.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  navbarOpen = false;
  collapsed = true;

  categorias: Category[] = [
    {nombre: 'Playeras', id: '1234'},
    {nombre: 'Muebles', id: '2526'},
    {nombre: 'Artesanias', id: '2985'},
  ];

  constructor( public cartService: CartService ) { }

  ngOnInit() {
  }

  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
  }

  showCart() {
    console.log('hola');
    this.navbarOpen = !this.navbarOpen;
    this.cartService.showCart();
  }

}
