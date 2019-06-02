import { Customer } from './../customer.interface';
import { Component, OnInit } from '@angular/core';
import {Validators, FormGroup, FormArray, FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
  public myForm: FormGroup;

  constructor(private _fb: FormBuilder) { }

  ngOnInit() {
    this.myForm = this._fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      addresses: this._fb.array([
        this.initAddress(),
      ])
    });
  }

  initAddress(){
    return this._fb.group({
      street: ['', Validators.required],
      postcode: ['']
    })
  }

  addAddress(){
    const control = <FormArray>this.myForm.controls['addresses'];
    control.push(this.initAddress());
  }

  removeAddress(i: number){
    const control = <FormArray>this.myForm.controls['addresses'];
    control.removeAt(i);
  }

  save(model: Customer){
    console.log(model);
  }

}
