import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Task } from './tasks';
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

@Injectable({
  providedIn: 'root'
})
export class FireserviceService {
  private snapshotChangesSubscription: any;
  constructor(
    public af: AngularFirestore,
  ) { }
  getTasks() {
    const currentUser = firebase.auth().currentUser;
    return this.af.collection('people').doc(currentUser.uid).collection('tasks').snapshotChanges();
  }
  createTask(t: Task) {
    const currentUser = firebase.auth().currentUser;
    this.af.collection('people').doc(currentUser.uid).collection('tasks').add(t);

    return;
  }
  updateTask(taskID: any, t: Task) {
    const currentUser = firebase.auth().currentUser;
    this.af.collection('people').doc(currentUser.uid).collection('tasks').doc(
      taskID).set(t);
    this.af.doc('tasks/' + taskID).update(t);
  }
  deleteTask(taskID: any) {
    const currentUser = firebase.auth().currentUser;
    this.af.collection('people').doc(currentUser.uid).collection('tasks').doc(
      taskID).delete();
    this.af.doc('tasks/' + taskID).delete();
  }

  unsubscribeOnLogOut() {
    //remember to unsubscribe from the snapshotChanges
    this.snapshotChangesSubscription.unsubscribe();
  }
}
