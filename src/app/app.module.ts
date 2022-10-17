import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; 


import { AppComponent } from './app.component';
import { KanbanBoardComponent } from './kanban-board/kanban-board.component';
import { TodoListComponent } from './kanban-board/todo-list/todo-list.component';
import { TaskComponent } from './kanban-board/task/task.component';
import { InprogressListComponent } from './kanban-board/inprogress-list/inprogress-list.component';
import { DoneListComponent } from './kanban-board/done-list/done-list.component';
import { HeaderComponent } from './header/header.component';
import { UserComponent } from './kanban-board/user/user.component';
import { UserDetailsComponent } from './kanban-board/user/user-details/user-details.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { MatInputModule } from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {DragDropModule} from '@angular/cdk/drag-drop';

@NgModule({
  declarations: [
    AppComponent,
    KanbanBoardComponent,
    TodoListComponent,
    TaskComponent,
    InprogressListComponent,
    DoneListComponent,
    HeaderComponent,
    UserComponent,
    UserDetailsComponent
  ],
  imports: [
    DragDropModule,
    MatIconModule,
    MatCardModule,
    MatButtonModule,
    MatInputModule,
    FormsModule,
    BrowserModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule {
  
}
