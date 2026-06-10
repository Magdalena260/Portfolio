import { Component } from '@angular/core';


import { HeaderComponent } from './header/header';
import { FooterComponent } from './footer/footer';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    HeaderComponent,
    FooterComponent,
    RouterOutlet
],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {}