import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  showBanner: boolean = true; // Exibe o banner por padrão

  toggleBanner() {
    this.showBanner = !this.showBanner;
  }
}
