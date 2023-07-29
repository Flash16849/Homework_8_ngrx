import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  standalone: true,
  imports: [MatIconModule],
})
export class NavbarComponent {

  constructor(public router: Router){}
  
  navigateToShoppingCart() {
    this.router.navigate(['/shopping-cart'])
  }

  backToHome(){
    this.router.navigate([''])
  }
}
