import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UsernameValidators } from './../common/username.validators';
import { ContactService } from '../contact.service';

@Component({
  selector: 'contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor(private contactService: ContactService){}

  form = new FormGroup({
    username: new FormControl("",[
      Validators.required,
      Validators.minLength(2),
      UsernameValidators.cannotContainSpace
    ]),
    email: new FormControl("", [
      Validators.required,
      Validators.minLength(3),
      Validators.email
    ]),
    subject: new FormControl("", Validators.required),
    message: new FormControl("",[
      Validators.required,
      Validators.maxLength(300)
    ]),
    subscribe: new FormControl(false)
  });

  ngOnInit(){
  }

  get username(){
    return this.form.get("username");
  }

  get email(){
    return this.form.get("email");
  }

  get subject(){
    return this.form.get("subject");
  }

  get message(){
    return this.form.get("message");
  }

  get subscribe(){
    return this.form.get("subscribe");
  }

  save(){
    if(this.username.errors || this.email.errors || this.subject.errors || this.message.errors){
      this.form.setErrors({
        invalid: true
      })
    }
    else this.contactService.create(this.form.value);
  }
}