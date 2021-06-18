/* eslint-disable @angular-eslint/use-lifecycle-interface */
/* eslint-disable arrow-body-style */
/* eslint-disable @typescript-eslint/dot-notation */
import { Component } from '@angular/core';
import { FireserviceService } from '../fireservice.service';
import { Router } from '@angular/router';
import { FireauthService } from '../fireauth.service';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  tasks: Array<any> = [];

  constructor(
    private fser: FireserviceService,
    public afAuth: FireauthService,
    private router: Router,
    ) {
    this.tasks = [
      { title: 'Milk', status: 'open' },
      { title: 'Eggs', status: 'open' },
      { title: 'Pancake Mix', status: 'open' },
    ];
  }

  addItem() {
    const theNewTask: string = prompt('New Task');
    if (theNewTask !== '') {
      this.tasks.push({ title: theNewTask, status: 'open' });
    }
  }

  markAsDone(slidingItem, task) {
    task.status = 'done';
    slidingItem.close();
  }
  removeTask(slidingItem, task) {
    task.status = 'removed';
    // Include code to remove the task element of the array tasks
    slidingItem.close();
  }

  ngOnInit() {
    this.fser.getTasks().subscribe(data => {
      this.tasks = data.map(e => {
        return {
          $key: e.payload.doc.id,
          title: e.payload.doc.data()['title'],
          status: e.payload.doc.data()['status'],
        };
      });
      console.log(this.tasks);
    });
  }

  logout(){
    this.afAuth.doLogout()
    .then(res => {
      this.router.navigate(['/login']);
    }, err => {
      console.log(err);
    });
}



}
