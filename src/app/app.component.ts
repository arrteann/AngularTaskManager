import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  listTask: Array<object> = [];

  select: string;
  // tslint:disable-next-line: typedef
  newTask(e) {
    this.listTask.push({
      id: e.id,
      title: e.title,
      user: e.user,
      date: e.date,
      status: e.status,
      select: e.select,
    });
  }

  removeTask() {
    this.listTask.filter((item, index) => {
      if (item['status'] == this.select) {
        this.listTask.splice(index, 1);
      }
    });
  }
}
