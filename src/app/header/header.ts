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
  currentLang: string = 'en';
  menuOpen = false;

  constructor(
    private translate: TranslateService,
    private router: Router
  ) {
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