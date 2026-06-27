import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-references',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './references.html',
  styleUrl: './references.scss'
})
export class ReferencesComponent {

  scrollToContact() {
    const element = document.getElementById('contact');

    if (element) {
      const headerOffset = 140;

      const y =
        element.getBoundingClientRect().top +
        window.pageYOffset -
        headerOffset;

      window.scrollTo({
        top: y,
        behavior: 'smooth'
      });
    }
  }

}