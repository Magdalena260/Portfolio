import {
  ApplicationConfig,
  provideBrowserGlobalErrorListeners,
  importProvidersFrom
} from '@angular/core';

import {
  provideRouter,
  withInMemoryScrolling
} from '@angular/router';

import { routes } from './app.routes';

import { provideHttpClient, HttpClient } from '@angular/common/http';

import {
  TranslateModule,
  TranslateLoader
} from '@ngx-translate/core';

import { Observable } from 'rxjs';

/* =========================
   TRANSLATE LOADER
========================= */

class SimpleTranslateLoader implements TranslateLoader {
  constructor(private http: HttpClient) {}

  getTranslation(lang: string): Observable<any> {
    return this.http.get(`assets/i18n/${lang}.json`);
  }
}

/* =========================
   APP CONFIG
========================= */

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),

    provideRouter(
      routes,
      withInMemoryScrolling({
        anchorScrolling: 'enabled',
        scrollPositionRestoration: 'enabled'
      })
    ),

    provideHttpClient(),

    importProvidersFrom(
      TranslateModule.forRoot({
        defaultLanguage: 'en',
        loader: {
          provide: TranslateLoader,
          useClass: SimpleTranslateLoader,
          deps: [HttpClient]
        }
      })
    )
  ]
};