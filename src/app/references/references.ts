import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-references',
  standalone: true,
  templateUrl: './references.html',
  styleUrl: './references.scss'
})
export class ReferencesComponent {

  @Output() scrollToContact = new EventEmitter<void>();

  goToContact() {
    this.scrollToContact.emit();
  }
}