import { Component, Input, inject } from '@angular/core';

import { type Task } from './task.model';
import { TasksSerivice } from '../tasks.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {
  @Input({required: true}) task!: Task;
  private tasksService = inject(TasksSerivice);

  onCompleteTask() {
    this.tasksService.removeTask(this.task.id);
  }
}
