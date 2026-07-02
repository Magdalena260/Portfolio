import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService, TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './header.html',
  styleUrl: './header.scss'
})
export class HeaderComponent {
  currentLang: 'en' | 'de' = 'en';
  menuOpen = false;

  constructor(
    private translate: TranslateService,
    private router: Router
  ) {
    const savedLang = localStorage.getItem('lang') as 'en' | 'de' | null;

    this.currentLang = savedLang ?? 'en';

    this.translate.setDefaultLang('en');
    this.translate.use(this.currentLang);
  }

  switchLanguage(lang: 'en' | 'de') {
    this.currentLang = lang;
    localStorage.setItem('lang', lang);
    this.translate.use(lang);
  }

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  goHome() {
    this.router.navigate(['/']);
    this.menuOpen = false;
  }

  scrollTo(id: string) {
    this.menuOpen = false;

    this.router.navigate(['/']).then(() => {
      setTimeout(() => {
        const element = document.getElementById(id);

        if (!element) return;

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
      }, 100);
    });
  }
}