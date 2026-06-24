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

  goToContact() {
    document.getElementById('contact')?.scrollIntoView({
      behavior: 'smooth'
    });
  }
}