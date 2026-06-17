import { Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage';
import { LegalNoticeComponent } from './legal-notice/legal-notice';

export const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'legal-notice', component: LegalNoticeComponent }
];