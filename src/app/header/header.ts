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
  clickState: string | null = null;

  switchLanguage(lang: string) {

    if (this.currentLang === lang) return;

    this.clickState = lang;

    setTimeout(() => {
      this.currentLang = lang;
      this.clickState = null;
    }, 120);
  }

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  scrollTo(id: string) {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    this.menuOpen = false;
  }
}