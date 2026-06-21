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

  clickedLang: string | null = null;

  switchLanguage(lang: string) {

    if (this.currentLang === lang) {
      this.triggerClick(lang);
      return;
    }

    this.currentLang = lang;
    this.triggerClick(lang);
  }

  triggerClick(lang: string) {
    this.clickedLang = lang;

    setTimeout(() => {
      this.clickedLang = null;
    }, 250);
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