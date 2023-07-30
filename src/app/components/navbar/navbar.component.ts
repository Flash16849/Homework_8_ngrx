import { Component, EventEmitter, Output } from '@angular/core';
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
  @Output() openD = new EventEmitter();

  constructor(public router: Router){}
  
  navigateToShoppingCart() {
    this.router.navigate(['/shopping-cart'])
  }

  backToHome(){
    this.router.navigate([''])
  }

  showD(){
    this.openD.emit();
    console.log("iiuhiuh");
  }
}

