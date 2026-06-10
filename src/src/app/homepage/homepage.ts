import { Component } from '@angular/core';
import { InfosComponent } from '../infos/infos';
import { AboutMeComponent } from '../about-me/about-me';
import { MySkillsComponent } from '../my-skills/my-skills';
import { PortfolioComponent } from '../portfolio/portfolio';
import { ReferencesComponent } from '../references/references';
import { ContactComponent } from '../contact/contact';

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [
    InfosComponent,
    AboutMeComponent,
    MySkillsComponent,
    PortfolioComponent,
    ReferencesComponent,
    ContactComponent
  ],
  templateUrl: './homepage.html',
  styleUrl: './homepage.scss'
})
export class HomepageComponent {}