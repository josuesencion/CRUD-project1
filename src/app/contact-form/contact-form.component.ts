import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {
  id: number;
  firstName: string;
  lastName: string;
  phone: string;

  constructor() { }

  ngOnInit() {
    console.log("hmmm... what is this?")
  }

}
