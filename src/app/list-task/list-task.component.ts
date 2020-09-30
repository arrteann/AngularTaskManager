import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-list-task',
  templateUrl: './list-task.component.html',
  styleUrls: ['./list-task.component.css'],
})
export class ListTaskComponent {
  @Input() Task: {
    id: string;
    title: string;
    user: string;
    date: Date;
    status: string;
    select: boolean;
  };

}
