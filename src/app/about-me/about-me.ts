import { Component, Output, EventEmitter } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-about-me',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './about-me.html',
  styleUrls: ['./about-me.scss']
})
export class AboutMeComponent {

  @Output() scrollToContact = new EventEmitter<void>();

  goToContact() {
    this.scrollToContact.emit();
  }

}