import { Component, Output, EventEmitter } from '@angular/core';
import { stringify } from 'querystring';

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrls: ['./new-task.component.css'],
})
export class NewTaskComponent {
  private static unique_id: number = 0;
  title: string;
  user: string;
  date: Date;
  status: string;
  isEmpty: boolean;
  @Output() addTask: EventEmitter<{
    id: string;
    title: string;
    user: string;
    date: Date;
    status: string;
    select: boolean;
  }> = new EventEmitter();

  private static newID() {
    this.unique_id += 1;
  }

  newTask() {
    if (
      this.title == '' ||
      this.user == '' ||
      this.date == null ||
      this.status == ''
    ) {
      this.isEmpty = true;
      return false;
    }
    this.addTask.emit({
      id: NewTaskComponent.unique_id.toString(),
      title: this.title,
      user: this.user,
      date: this.date,
      status: this.status,
      select: false
    });
    NewTaskComponent.newID();
    this.clear();
    this.isEmpty = false;
  }

  clear() {
    this.title = '';
    this.user = '';
    this.date = null;
    this.status = 'started';
  }
}
