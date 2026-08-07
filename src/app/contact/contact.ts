import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  ReactiveFormsModule,
  FormGroup,
  FormControl,
  Validators
} from '@angular/forms';
import { RouterModule } from '@angular/router';
import { environment } from '../../environments/environment';
import emailjs from '@emailjs/browser';

import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule,
    TranslateModule
  ],
  templateUrl: './contact.html',
  styleUrl: './contact.scss'
})
export class ContactComponent {

  emailSent = false;
  emailError = false;

  contactForm = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', [
      Validators.required,
      Validators.email
    ]),
    message: new FormControl('', Validators.required),
    privacy: new FormControl(false, Validators.requiredTrue)
  });

  sendEmail(): void {
    if (this.contactForm.invalid) {
      this.contactForm.markAllAsTouched();
      return;
    }

    const formData = {
      name: this.contactForm.value.name ?? '',
      email: this.contactForm.value.email ?? '',
      message: this.contactForm.value.message ?? ''
    };

    emailjs.send(
      environment.emailjs.serviceId,
      environment.emailjs.templateId,
      formData,
      environment.emailjs.publicKey
    )
    .then(() => {
      this.emailSent = true;
      this.emailError = false;

      this.contactForm.reset();
    })
    .catch((error) => {
      console.error('EmailJS error:', error);

      this.emailError = true;
      this.emailSent = false;
    });
  }

  scrollToTop(): void {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }
}