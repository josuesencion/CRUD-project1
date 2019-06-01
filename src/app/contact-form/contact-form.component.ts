import { Component, OnInit } from '@angular/core';
import { NgForm} from '@angular/forms';

class Contact{
  id: number;
  name: string;
  lastName: string;
  phone: string;
}

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {
  private currContact: Contact = new Contact();
  private id: number=0;
  private contacts: Contact[] = [];

  constructor() { }

  onSubmit(form: NgForm){
    this.contacts.push({...form.value, id: this.id++});
    // form.reset();
    console.log(this.contacts);
  }

  ngOnInit() {
    console.log("hmmm... what is this?")
  }

}
