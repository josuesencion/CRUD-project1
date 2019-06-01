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
  private updateMode: boolean = false;
  private contacts: Contact[] = [];

  constructor() { }

  onSubmit(form: NgForm){
    if(!this.updateMode){
      this.contacts.push({...form.value, id: this.id++});
    }else{
      const index: number = this.contacts.findIndex(
        x => !!x && x.id === this.currContact.id
        );
      this.contacts[index] = {...form.value, id: this.currContact.id};
      this.updateMode = false;
    }
    //form.reset();
    //console.log(this.contacts);
  }

  private onRowSelected(id: number): void {
    const index: number = this.contacts.findIndex(x => !!x && x.id === id);
    this.updateMode = true;
    this.currContact = this.contacts[index];
  }

  private onDelete(id: number):void{
    const index: number = this.contacts.findIndex(x => !!x && x.id === id);
    this.contacts[index] = null;
  }

  ngOnInit() {
    console.log("hmmm... what is this?")
  }

}
