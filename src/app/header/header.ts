import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  templateUrl: './header.html',
  styleUrl: './header.scss'
})
export class HeaderComponent {

  currentLang: string = 'en';
  clickedLang: string | null = null;

  menuOpen = false;

  switchLanguage(lang: string) {

    this.clickedLang = lang;

    setTimeout(() => {
      this.currentLang = lang;
      this.clickedLang = null;
    }, 120);
  }

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  scrollTo(id: string) {
    document.getElementById(id)?.scrollIntoView({
      behavior: 'smooth'
    });

    this.menuOpen = false;
  }
}