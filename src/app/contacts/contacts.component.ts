import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {
  genders = ['male', 'female'];
  signupform: FormGroup;
   states: Array<String> = ['AR', 'AL', 'CA', 'DC'];


  mobnumPattern = '^((\\+91-?)|0)?[0-9]{10}$';
  emailPattern = '^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$';

  constructor() { }

  ngOnInit(): void {

    this.signupform = new FormGroup({
      fname: new FormControl('', [Validators.required]),
      lname: new FormControl('', [Validators.required]),
      gender: new FormControl('', [Validators.required]),
      pnumber: new FormControl('', [Validators.required, Validators.maxLength(10),
        Validators.pattern(this.mobnumPattern)]),
      email: new FormControl('', [Validators.required, Validators.email,
        Validators.pattern(this.emailPattern)]),
      anum: new FormControl('', [Validators.required]),
      icode: new FormControl('', Validators.required)


    });
  }

  onSubmit(){
    console.log(this.signupform.value);
  }

}
