import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-about-me',
  standalone: true,
  templateUrl: './about-me.html',
  styleUrl: './about-me.scss'
})
export class AboutMeComponent {

  @Output() scrollToContact = new EventEmitter<void>();

  goToContact() {
    this.scrollToContact.emit();
  }
}