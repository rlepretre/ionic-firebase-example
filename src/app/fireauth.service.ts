import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import { FireserviceService } from './fireservice.service';
import { AngularFireAuth } from '@angular/fire/auth';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FireauthService {
  constructor(
    private firebaseService: FireserviceService,
    public afAuth: AngularFireAuth
  ) { }
  doRegister(value) {
    return new Promise<any>((resolve, reject) => {
      firebase.auth().createUserWithEmailAndPassword(value.email,
        value.password)
        .then(
          res => resolve(res),
          err => reject(err));
    });
  }
  doLogin(value) {
    return new Promise<any>((resolve, reject) => {
      firebase.auth().signInWithEmailAndPassword(value.email,
        value.password)
        .then(
          res => resolve(res),
          err => reject(err));
    });
  }
  doLogout(){
    return new Promise((resolve, reject) => {
      this.afAuth.signOut()
      .then(data => {
        this.firebaseService.unsubscribeOnLogOut();
        resolve(data);
      }).catch((error) => {
        reject();
      });
    });
  }
}
