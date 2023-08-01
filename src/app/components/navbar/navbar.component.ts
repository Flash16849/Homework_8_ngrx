import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  @Output() openD = new EventEmitter();

  constructor(public router: Router, public authService: AuthService){}
  
  navigateToShoppingCart() {
    this.router.navigate(['/shopping-cart'])
  }

  backToHome(){
    this.router.navigate([''])
  }

  showD(){
    this.openD.emit();
  }

  login(){
    this.authService.logInWGoogle()
  }

  logout(){
    this.authService.logOut();
  }

  
}

