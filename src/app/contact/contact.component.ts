import { Contact } from './contact.interface';
import { Component, OnInit } from '@angular/core';
import {Validators, FormGroup, FormArray, FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  public myForm: FormGroup;

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
      phone: ['', Validators.required]
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
    console.log(model);
  }

}
