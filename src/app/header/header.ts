import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  templateUrl: './header.html',
  styleUrl: './header.scss'
})
export class HeaderComponent {

  currentLang: string = 'en';
  menuOpen = false;

  switchLanguage(lang: string) {
    this.currentLang = lang;
  }

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  scrollTo(id: string) {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    this.menuOpen = false;
  }
}