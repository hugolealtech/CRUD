import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './componentes/header/header.component';
import { TasksComponent } from './componentes/tasks/tasks.component';
import { TasksItemComponent } from './componentes/tasks-item/tasks-item.component';

import { ButtonComponent } from './componentes/button/button.component';
import { AddTasksComponent } from './componentes/add-tasks/add-tasks.component';



@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent,TasksComponent,TasksItemComponent, AddTasksComponent,ButtonComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'CRUD';
}
