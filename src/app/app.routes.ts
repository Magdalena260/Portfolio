import { Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage';
import { LegalNoticeComponent } from './legal-notice/legal-notice';
import { PrivacyComponent } from './privacy/privacy.component';

export const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'legal-notice', component: LegalNoticeComponent },
  { path: 'privacy', component: PrivacyComponent }
];