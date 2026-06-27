import { Component } from '@angular/core';
import { TranslateService, TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './header.html',
  styleUrl: './header.scss'
})
export class HeaderComponent {

  currentLang: string = 'en';
  menuOpen = false;

  constructor(private translate: TranslateService) {
    this.translate.setDefaultLang('en');
    this.translate.use('en');
  }

  switchLanguage(lang: string) {
    this.currentLang = lang;
    this.translate.use(lang);
  }

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  scrollTo(id: string) {
    const element = document.getElementById(id);

    if (element) {

      const offsets: Record<string, number> = {
        about: 220,
        skills: 140,
        portfolio: 140,
        references: 260,
        contact: 140
      };

      const headerOffset = offsets[id] ?? 140;

      const y =
        element.getBoundingClientRect().top +
        window.scrollY -
        headerOffset;

      window.scrollTo({
        top: y,
        behavior: 'smooth'
      });
    }

    this.menuOpen = false;
  }
}