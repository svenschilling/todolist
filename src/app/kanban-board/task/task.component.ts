import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
  // TODO databind taskname to inputfield
  taskName = '';

  taskExample = ['hund waschen','füttern','gassi gehen'];
  
  constructor() {
  
  }

  ngOnInit(): void {
  }

  onReset() {
    console.log('reset');
    this.taskName = '';
  }

  onClear() {
    this.taskExample = [];
  }

  // fills taskExample[] with new tasks
  onCreate() {
    console.log('create');
    this.taskExample.push(this.taskName);
    this.taskName = '';
  }
}
