import { Component, OnInit, Input } from '@angular/core';
import { CartModel } from '../cart-model';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  title = "Gem Store"

  @Input() cart: CartModel;

  constructor() { }

  ngOnInit() {
  }

}
