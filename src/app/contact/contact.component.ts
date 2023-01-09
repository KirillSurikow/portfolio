import { Component, ViewChild, ElementRef, OnInit,  } from '@angular/core';
import { LanguageService } from '../services/language.service';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],

})
export class ContactComponent implements OnInit {
  invalidName = false;
  invalidEmail = false;
  invalidMessage = false;
  missingName = false;
  missingMail = false;
  missingMessage = false;
  messageSent = false;

  constructor(public language: LanguageService) {

  }

  @ViewChild('myForm')
  myform!: ElementRef;
  @ViewChild('namefield')
  namefield!: ElementRef;
  @ViewChild('messagefield')
  messagefield!: ElementRef;
  @ViewChild('mailfield')
  mailfield!: ElementRef;
  @ViewChild('button')
  button!: ElementRef;



  ngOnInit() {
    this.language.languageChoosen.subscribe((lang: string) => {
      if (lang == 'de') {
        this.namefield.nativeElement.placeholder = "Dein Name";
        this.mailfield.nativeElement.placeholder = "Deine Email";
        this.messagefield.nativeElement.placeholder = "Deine Nachricht";
      }
      if (lang == 'en') {
        this.namefield.nativeElement.placeholder = "Your name";
        this.mailfield.nativeElement.placeholder = "Your mail";
        this.messagefield.nativeElement.placeholder = "Your message";
      }
    }
    )
  }


  typing($event: any, slot: string) {
    this.resetValidation()
    if (slot == 'name') {
      this.validateName($event)
    }
    if (slot == 'mail') {
      this.validateMail($event)
    }
    if (slot == 'message') {
      this.validateMessage($event)
    }
  }

  resetValidation() {
    this.missingName = false;
    this.missingMail = false;
    this.missingMessage = false;
  }

  validateName($event: any) {
    if ($event.target.value.includes('<') || $event.target.value.includes('>'))
      this.invalidName = true;
    else
      this.invalidName = false;
  }

  validateMail($event: any) {
    if ($event.target.value.includes('<') || $event.target.value.includes('>'))
      this.invalidEmail = true;
    else
      this.invalidEmail = false;
  }

  validateMessage($event: any) {
    if ($event.target.value.includes('<') || $event.target.value.includes('>'))
      this.invalidMessage = true;
    else
      this.invalidMessage = false;
  }

  validateFormular() {
    if (this.namefield.nativeElement.value == '') {
      this.missingName = true;
    }
    if (this.mailfield.nativeElement.value == '') {
      this.missingMail = true;
    }
    if (this.messagefield.nativeElement.value == '') {
      this.missingMessage = true;
    } else {
      this.sendMail()
    }
  }

  sendMail() {
    this.disableFormular();
    this.fetchFormular();
    this.displayNotification();
    this.enableFormular();
  }

  disableFormular() {
    this.namefield.nativeElement.disabled = true;
    this.messagefield.nativeElement.disabled = true;
    this.mailfield.nativeElement.disabled = true;
    this.button.nativeElement.disabled = true;
  }

  async fetchFormular() {
    let fd = new FormData();
    fd.append('name', this.namefield.nativeElement.value);
    fd.append('message', this.namefield.nativeElement.value);
    await fetch('https://kirill-surikow.developerakademie.net/send_mail/send_mail.php'),
    {
      method: 'POST',
      body: fd
    }
  }

  displayNotification() {
    this.messageSent = true;
    setTimeout(() => this.messageSent = false, 4000);
  }

  enableFormular() {
    this.namefield.nativeElement.disabled = false;
    this.messagefield.nativeElement.disabled = false;
    this.mailfield.nativeElement.disabled = false;
    this.button.nativeElement.disabled = false;
  }
}




