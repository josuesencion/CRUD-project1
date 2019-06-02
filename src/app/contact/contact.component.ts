import { 
  Component, 
  OnInit,
  Input 
} from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormArray
} from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  myForm: FormGroup;

  constructor(fb: FormBuilder) { 
    this.myForm = fb.group({
      'sku': ['ABC123']
    });
  }

  onSubmit(value: string): void{
    console.log('you submitted value: ', value);
  }

  ngOnInit() {
  }

}
