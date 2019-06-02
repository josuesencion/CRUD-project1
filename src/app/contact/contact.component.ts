import { ArrayType } from '@angular/compiler';
import { Contact } from './contact.interface';
import { Component, OnInit } from '@angular/core';
import {Validators, FormGroup, FormArray, FormBuilder, FormControl} from '@angular/forms';

class Contacts{
  id: number;
  name: string;
  lastName: string;
  phones: ArrayType[];
}

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  public myForm: FormGroup;
  private contacts: Contacts[] = [];

  private id: number=0;
  private updateMode: boolean = false;
  private currContact: Contacts = new Contacts();

  constructor(private _fb: FormBuilder) {}

  ngOnInit() {
    this.myForm = this._fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      lastName: ['', [Validators.required, Validators.minLength(3)]],
      phones: this._fb.array([
        this.initPhones(),
      ])
    });
  }

  initPhones(){
    return this._fb.group({
      phone: ['', [Validators.required,this.phoneValidator]]
    })
  }

  addPhone(){
    const control = <FormArray>this.myForm.controls['phones'];
    control.push(this.initPhones());
  }

  removePhone(i: number){
    const control = <FormArray>this.myForm.controls['phones'];
    control.removeAt(i);
  }

  onSubmit(model: Contact){
    if(!this.updateMode){
      this.contacts.push({id: this.id++, ...model});
    }else{
      const index: number = this.contacts.findIndex(
        x => !!x && x.id === this.currContact.id
        );
      this.contacts[index] = {id: this.id++, ...model};
      this.updateMode = false;
    }

    this.ngOnInit();  
    console.log(this.contacts);
  }

  private onDelete(id: number):void{
    const index: number = this.contacts.findIndex(x => !!x && x.id === id);
    this.contacts[index] = null;
  }

  private onRowSelected(id: number): void {
    const index: number = this.contacts.findIndex(x => !!x && x.id === id);
    this.updateMode = true;
    this.currContact = this.contacts[index];
  }

  phoneValidator(control: FormControl):{ [s: string]: boolean }{
    if (!control.value.match(/^[2-9]\d{2}[2-9]\d{2}\d{4}$/)){
      return {invalidPhone: true};
    }
  }

}
