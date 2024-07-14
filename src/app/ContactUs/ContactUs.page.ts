import { Component, ElementRef, ViewChild, OnInit } from '@angular/core';
import { GoogleMapsService } from 'app/google-maps.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import emailjs, { type EmailJSResponseStatus } from '@emailjs/browser';
import { environment } from 'environments/environment';

@Component({
  selector: 'app-ContactUs',
  templateUrl: './ContactUs.page.html',
  styleUrls: ['./ContactUs.page.scss']
})
export class ContactUsPage  {
  @ViewChild('CoreConsultMap', { static: false }) CoreConsultMap!: ElementRef<HTMLElement>;
  contactForm: FormGroup;
  constructor(
    private googleMapsService: GoogleMapsService,
    private fb: FormBuilder
  ) {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required]
    });
  }

  ngAfterViewInit() {
    if (this.CoreConsultMap) {
      this.googleMapsService.createMap(this.CoreConsultMap.nativeElement);
    }
  }

  sendEmail() {
    if (this.contactForm.valid) {
      const { name, email, message } = this.contactForm.value;
      const templateParams = {
        from_name: name,
        client_email: email,
        message: message
      };
      emailjs.send(environment.emailjs.serviceID, environment.emailjs.templateID, templateParams, environment.emailjs.userID)
    } 
  }
}
