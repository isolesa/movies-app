import { AngularFireDatabase } from 'angularfire2/database';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private database: AngularFireDatabase) {}

  create(contactFormData){
    this.database.list('/contact').push(contactFormData);
  }
}
