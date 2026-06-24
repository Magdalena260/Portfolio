import { Component, Output, EventEmitter } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-my-skills',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './my-skills.html',
  styleUrl: './my-skills.scss'
})
export class MySkillsComponent {

  @Output() scrollToReferences = new EventEmitter<void>();

  goToReferences() {
    this.scrollToReferences.emit();
  }
}