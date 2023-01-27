import { Injectable } from '@angular/core';
import { User } from './user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  selectedUser: User={
    nom: "",
    prenom: "",
    civilite:"",
    adresse:"",
    telephone: "",
    email: "",
    password: "",
    passwordconfirmation:"",

  }

  constructor() { }
}
